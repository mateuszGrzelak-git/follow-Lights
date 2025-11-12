using backend;
using backend.Domain;
using backend.Repositories;
using Microsoft.EntityFrameworkCore;

namespace tests;

[TestFixture]
public class UserRepositoryTest : IDisposable, IAsyncDisposable
{
    private UserRepository _userRepository;
    private DatabaseInit _context;
    private User _simpleUser;
    private User _updatedUser;

    [SetUp]
    public void SetUp()
    {
        var options = new DbContextOptionsBuilder<DatabaseInit>()
            .UseInMemoryDatabase(databaseName: new Guid().ToString())
            .Options;
        
        _context = new DatabaseInit(options);
        _userRepository = new UserRepository(_context);

        _simpleUser = new User
        {
            Id = Guid.NewGuid(),
            Username = "Admin",
            Password = "Admin",
            Email = "a@poczta.pl",
            Active = true
        };

        _updatedUser = new User
        {
            Id = _simpleUser.Id,
            Username = "User",
            Password = "User",
            Email = "b@gmail.com",
            Active = true
        };
    }

    [Test]
    public void AddUserTest()
    {
        _userRepository.AddUser(_simpleUser);
        
        Assert.AreEqual(_userRepository.GetUser(_simpleUser.Id), _simpleUser);
    }

    [Test]
    public void DeleteUserTest()
    {
        _userRepository.AddUser(_simpleUser);
        
        int countBeforeRemove = _userRepository.GetAllUsers().Count();
        
        _userRepository.DeleteUser(_simpleUser.Id);
        Assert.AreEqual(_userRepository.GetAllUsers().Count(), countBeforeRemove-1);
    }

    [Test]
    public void UpdateUserTest()
    {
        _userRepository.AddUser(_simpleUser);
        _userRepository.UpdateUser(_updatedUser);
        
        Assert.AreEqual(_userRepository.GetUser(_updatedUser.Id).Username, _updatedUser.Username);
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