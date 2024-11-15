using backend.Domain;
using System.Collections;

namespace backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        public void addUser(User user)
        {

        }
        public void deleteUser(Guid id)
        {

        }
        public User getUser(Guid id)
        {
            return new User();
        }
        public IEnumerable<User> getAllUsers(IEnumerable<User> enumerable)
        {
            return enumerable;
        }
        public bool updateUSer(User user)
        {
            return false; 
        }
    }
}
