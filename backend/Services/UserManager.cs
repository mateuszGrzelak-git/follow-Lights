using backend.Repositories;
using backend.Domain;

namespace backend.Services
{
    public class UserManager : IUserManager
    {
        private readonly IUserRepository repository;

        UserManager()
        {
            repository = new UserRepository();
        }

        public bool CreateUser(User user)
        {
            return false;
        }

        public User? GetUser(Guid id)
        {
            return new User();
        }

        public IEnumerable<User> GetAllUsers(IEnumerable<User> result)
        {
            return result;
        }

        public bool UpdateUsers(User user)
        {
            return false;
        }

        public bool DeleteUser(Guid id)
        {
            return false;
        }
    }
}
