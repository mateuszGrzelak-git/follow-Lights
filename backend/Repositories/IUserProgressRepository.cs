using backend.Domain;

namespace backend.Repositories;

public interface IUserProgressRepository
{
    public void AddUserProgress(UserProgress user);
    public void DeleteUserProgress(Guid id);
    public UserProgress GetUserProgress(Guid id);
    public IEnumerable<UserProgress> GetAllUserProgress();
    public bool UpdateUserProgress(UserProgress user);
}