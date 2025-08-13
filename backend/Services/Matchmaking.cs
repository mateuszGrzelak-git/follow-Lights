using backend.Domain;

namespace backend.Services
{
    public class Matchmaking
    {
        UserProgress[] userProgress;

        public Matchmaking(UserProgress[] userProgress)
        {
            this.userProgress = userProgress;
        }

        public void findMatch(UserProgress first)
        {
            UserProgress[] potentialOpponents = new UserProgress[userProgress.Length];

            foreach (var item in userProgress) {
                //if (item.isActive())
                {
                    potentialOpponents.Append(item);
                }
            }
        }
    }
}