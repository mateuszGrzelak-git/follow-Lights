using backend.Domain;

namespace backend.Services
{
    public interface IUserManager
    {
        Task<bool> CreateUser(User user);
        Task<User?> GetUser(Guid id);
        Task<IEnumerable<User>> GetAllUsers();
        Task<bool> UpdateUsers(User user);
        Task<bool> DeleteUser(Guid id);
    }
}
