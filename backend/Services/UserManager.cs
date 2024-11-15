using backend.Repositories;

namespace backend.Services
{
    public class UserManager : IUserManager
    {
        private readonly IUserRepository repository;

        UserManager()
        {
            repository = new UserRepository();
        }

        public void CreateUser(User user)
        {

        }
    }
}
