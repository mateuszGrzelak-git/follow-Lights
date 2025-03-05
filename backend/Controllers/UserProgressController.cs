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

    [HttpGet("{userId}")]
    public ActionResult<UserProgress> GetUserProgress(Guid userId)
    {
        UserProgress progress;
        try
        {
            progress = _userProgressRepository.GetUserProgress(userId);
        }
        catch
        {
            progress = new UserProgress {
                Id = new Guid(),
                UserId = userId,
                UpdateTime = DateTime.Now,
                Rank = 0
            };

            _userProgressRepository.AddUserProgress(progress);
        }

        return Ok(progress);
    }

    [HttpPost("{userId}")]
    public IActionResult SetUserProgress(Guid userId, [FromBody] UserProgress userProgress)
    {
        if (userProgress == null || userProgress.UserId != userId)
        {
            return BadRequest("Invalid user progress data.");
        }

        bool updated = _userProgressRepository.UpdateUserProgress(userProgress);

        if (!updated)
        {
            return NotFound("User progress not found.");
        }

        return Ok();
    }

}