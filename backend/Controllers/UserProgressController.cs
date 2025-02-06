using backend.Domain;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProgressController : ControllerBase
{
    private readonly UserProgressRepository _userProgressRepository;

    public UserProgressController(UserProgressRepository userProgressRepository)
    {
        _userProgressRepository = userProgressRepository;
    }

    [HttpGet]
    public UserProgress GetUserProgress(Guid userId)
    {
        return _userProgressRepository.GetUserProgress(userId); 
    }

    [HttpPost]
    public void SetUserProgress(Guid userId, UserProgress userProgress)
    {
        _userProgressRepository.UpdateUserProgress(userProgress);
    }
}