using backend.Domain;

namespace backend.Repositories;

public class UserProgressRepository
{
    private readonly DatabaseInit _context;

    public UserProgressRepository(DatabaseInit context)
    {
        _context = context;
    }
    
    public void AddUserProgress(UserProgress userProgress)
    {
        _context.UserProgresses.Add(userProgress);
        _context.SaveChanges();
    }

    public void DeleteUserProgress(Guid id)
    {
        var userProgress = _context.UserProgresses.Find(id);
        if (userProgress != null)
        {
            _context.UserProgresses.Remove(userProgress);
            _context.SaveChanges();
        }
    }

    public UserProgress GetUserProgress(Guid id)
    {
        var result = _context.UserProgresses.Find(id);
        if (result != null)
        {
            return result;
        }
        else
        {
            throw new Exception("UserProgress is NULL");
        }
    }

    public IEnumerable<UserProgress> GetAllUserProgress()
    {
        return _context.UserProgresses.ToList();
    }

    public bool UpdateUserProgress(UserProgress user)
    {
        var existingUser = _context.UserProgresses.Find(user.Id);
        if (existingUser != null)
        {
            existingUser.Rank = user.Rank;
            
            _context.UserProgresses.Update(existingUser);
            _context.SaveChanges();
            return true;
        }

        return false;
    }
}