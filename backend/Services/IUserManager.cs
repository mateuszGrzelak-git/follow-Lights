using backend.Domain;

namespace backend.Services
{
    public interface IUserManager
    {
        bool CreateUser(User user);
        User? GetUser(Guid id);
        IEnumerable<User> GetAllUsers(IEnumerable<User> result);
        bool UpdateUsers(User user);
        bool DeleteUser(Guid id);
    }
}
