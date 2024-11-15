using backend.Domain;

namespace backend.Repositories
{
    public interface IUserRepository
    {
        public void addUser(User user);
        public void deleteUser(Guid id);
        public User getUser(Guid id);
        public IEnumerable<User> getAllUsers(IEnumerable<User> enumerable);
        public bool updateUSer(User user);
    }
}
