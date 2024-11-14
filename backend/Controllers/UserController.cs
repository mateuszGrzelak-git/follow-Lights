using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet("username")]
        public string GetUsername()
        {
            return "";
        }

        [HttpGet("email")]
        public string GetEmail()
        {
            return "";
        }

        [HttpGet("id")]
        public int GetID()
        {
            return 0;
        }
    }
}
