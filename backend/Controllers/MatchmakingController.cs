using Microsoft.AspNetCore.Mvc;
using backend.Services;
using System.Threading.Tasks;
namespace backend;

[ApiController]
[Route("api/matchmaking")]
public class MatchmakingController : ControllerBase
{
    private readonly MatchmakingService _matchmakingService;

    public MatchmakingController(MatchmakingService matchmakingService)
    {
        _matchmakingService = matchmakingService;
    }

    [HttpPost("find-match")]
    public IActionResult FindMatch([FromBody] MatchmakingRequest request)
    {
        var match = _matchmakingService.FindMatch(request.UserId);
        if (match == null)
        {
            return NotFound("No opponents found!!!");
        }
        return Ok(match);
    }
}
