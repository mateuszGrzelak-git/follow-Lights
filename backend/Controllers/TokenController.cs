using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace backend.Controllers;

[ApiController]
[Route("token")]
public class TokenController : ControllerBase
{
    [Authorize(AuthenticationSchemes = "refresh")]
    [HttpPut("access_token", Name = "refresh")]
    public IActionResult Refresh()
    {
        Claim refreshToken = User.Claims.FirstOrDefault(x => x.Type == "refresh")!;
        Claim username = User.Claims.FirstOrDefault(x => x.Type == "username")!;

        return Ok();
    }
}