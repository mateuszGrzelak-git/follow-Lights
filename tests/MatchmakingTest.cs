using backend;
using backend.Domain;
using backend.Repositories;
using backend.Services;
using Microsoft.EntityFrameworkCore;

namespace tests;

public class MatchmakingTest
{
    private Matchmaking _matchmaking;
    private User _simpleUser;
    private User _simpleUserOpponent;
    
    [SetUp]
    public void SetUp()
    {
        var options = new DbContextOptionsBuilder<DatabaseInit>()
            .UseInMemoryDatabase(databaseName: new Guid().ToString())
            .Options;
        
        var context = new DatabaseInit(options);
        UserRepository userRepository = new UserRepository(context);
        UserProgressRepository userProgressRepository = new UserProgressRepository(context);
        
        
        _simpleUser = new User
        {
            Id = Guid.NewGuid(),
            Username = "Admin",
            Password = "Admin",
            Email = "a@poczta.pl",
            Active = true,
        };
        UserProgress simpleUserProgress = new UserProgress
        {
            Id = Guid.NewGuid(),
            Rank = 0,
            Results = new List<int>(),
            UpdateTime = DateTime.Now,
            UserId = _simpleUser.Id,
        };
        
        _simpleUser.UserProgress = simpleUserProgress;

        _simpleUserOpponent = new User
        {
            Id = Guid.NewGuid(),
            Username = "User",
            Password = "User",
            Email = "b@gmail.com",
            Active = true
        };
        UserProgress simpleUserOpponentProgress = new UserProgress
        {
            Id = Guid.NewGuid(),
            Rank = 0,
            Results = new List<int>(),
            UpdateTime = DateTime.Now,
            UserId = _simpleUserOpponent.Id,
        };
        userProgressRepository.AddUserProgress(simpleUserProgress);
        userProgressRepository.AddUserProgress(simpleUserOpponentProgress);
        _simpleUserOpponent.UserProgress = simpleUserOpponentProgress;
        
        userRepository.AddUser(_simpleUser);
        userRepository.AddUser(_simpleUserOpponent);
        
        _matchmaking = new Matchmaking(userRepository, userProgressRepository);
    }

    [Test]
    public void MatchmakeTest()
    {
        Assert.AreEqual(_matchmaking.matchmake(_simpleUser).Username, _simpleUserOpponent.Username);
        Assert.AreEqual(_matchmaking.matchmake(_simpleUserOpponent).Username, _simpleUser.Username);
    }
}