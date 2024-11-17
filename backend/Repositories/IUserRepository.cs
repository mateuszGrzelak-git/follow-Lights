using backend.Domain;

namespace backend.Repositories
{
    public interface IUserRepository
    {
        public void AddUser(User user);
        public void DeleteUser(Guid id);
        public User GetUser(Guid id);
        public IEnumerable<User> GetAllUsers();
        public bool UpdateUser(User user);
    }
}
