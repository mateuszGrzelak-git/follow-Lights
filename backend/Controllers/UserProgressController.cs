using backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserProgressController : ControllerBase
{
    private readonly IUserProgressRepository _userProgressRepository;

    public UserProgressController(IUserProgressRepository userProgressRepository)
    {
        _userProgressRepository = userProgressRepository;
    }
}