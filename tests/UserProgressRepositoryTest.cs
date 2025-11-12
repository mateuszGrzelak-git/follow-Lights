using backend;
using backend.Domain;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

namespace tests;

[TestFixture]
public class UserProgressRepositoryTest : IDisposable, IAsyncDisposable
{
    private UserProgressRepository _userProgressRepository;
    private DatabaseInit _context;
    private UserProgress _simpleUserProgress;
    private UserProgress _updatedUserProgress;

    [SetUp]
    public void SetUp()
    {
        var options = new DbContextOptionsBuilder<DatabaseInit>()
            .UseInMemoryDatabase(databaseName: new Guid().ToString())
            .Options;
        
        _context = new DatabaseInit(options);
        _userProgressRepository = new UserProgressRepository(_context);

        _simpleUserProgress = new UserProgress
        {
            Id = Guid.NewGuid(),
            Rank = 1,
            UpdateTime = DateTime.Now
        };

        _updatedUserProgress = new UserProgress
        {
            Id = _simpleUserProgress.Id,
            Rank = 2,
            UpdateTime = DateTime.Now
        };
    }

    [Test]
    public void AddUserProgress()
    {
        _userProgressRepository.AddUserProgress(_simpleUserProgress);
        
        Assert.AreEqual(_userProgressRepository.GetUserProgress(_simpleUserProgress.Id), _simpleUserProgress);
    }

    [Test]
    public void UpdateUserProgress()
    {
        _userProgressRepository.AddUserProgress(_simpleUserProgress);
        _userProgressRepository.UpdateUserProgress(_updatedUserProgress);
        
        Assert.AreEqual(_userProgressRepository.GetUserProgress(_updatedUserProgress.Id).Rank, _updatedUserProgress.Rank);
    }

    [Test]
    public void DeleteUserProgress()
    {
        _userProgressRepository.AddUserProgress(_simpleUserProgress);
        
        int countBeforeRemove = _userProgressRepository.GetAllUserProgress().Count();
        
        _userProgressRepository.DeleteUserProgress(_simpleUserProgress.Id);
        Assert.AreEqual(_userProgressRepository.GetAllUserProgress().Count(), countBeforeRemove-1);
    }

    public void Dispose()
    {
        _context.Dispose();
    }

    public async ValueTask DisposeAsync()
    {
        await _context.DisposeAsync();
    }
}