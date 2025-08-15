using backend.Domain;
using backend.Repositories;

namespace backend.Services
{
    public class Matchmaking
    {
        private UserRepository _userRepository;
        private UserProgressRepository _userProgressRepository;
        private int _initialMatchmakingScoreRadius;
        private int _limitMatchmakingScoreRadius;

        public Matchmaking(UserRepository userRepository, UserProgressRepository userProgressRepository, int initialMatchmakingScoreRadius = 1, int limitMatchmakingScoreRadius = 100)
        {
            _userRepository = userRepository;
            _userProgressRepository = userProgressRepository;
            _initialMatchmakingScoreRadius = initialMatchmakingScoreRadius;
            _limitMatchmakingScoreRadius = limitMatchmakingScoreRadius;
        }

        private void createUserProgressIfNotExists(User user)
        {
            if (user.UserProgress == null)
            {
                UserProgress userProgress = new UserProgress()
                {
                    Id = Guid.NewGuid(),
                    Results = new List<int>(),
                    Rank = 0,
                    UpdateTime = DateTime.Now,
                    UserId = user.Id
                };

                _userProgressRepository.AddUserProgress(userProgress);
                user.UserProgress = userProgress;
            }
        }

        private User? findOpponent(User user, int matchmakingScoreRadius, IEnumerable<UserProgress> userProgresses)
        {
            createUserProgressIfNotExists(user);

            foreach (UserProgress userProgress in userProgresses)
            {
                if
                (
                    (
                        Math.Abs
                        (userProgress.Rank - user.UserProgress.Rank)
                            <
                        matchmakingScoreRadius
                    )
                    &&
                    (
                        _userRepository.GetUser(userProgress.UserId).Active
                    )
                    &&
                    (
                        _userRepository.GetUser(userProgress.UserId).Id != user.Id
                    )
                )

                {
                    return _userRepository.GetUser(userProgress.UserId);
                }
            }

            if (matchmakingScoreRadius < 100)
                return findOpponent(user, matchmakingScoreRadius * 2, userProgresses);
            return null;
        }

        public User? matchmake(User user)
        {
            IEnumerable<UserProgress> userProgresses = _userProgressRepository.GetAllUserProgress();

            return findOpponent(user, _initialMatchmakingScoreRadius, userProgresses);
        }
    }
}