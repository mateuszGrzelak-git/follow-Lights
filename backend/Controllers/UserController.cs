using backend.Responses;
using backend.Domain;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using backend.Requests.User;
using System.Text.Json;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserRepository _userRepository;

        public UserController(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        
        [HttpPost]
        public IActionResult CreateUser([FromBody] CreateUserRequest request)
        {
            var user = new User
            {
                Id = Guid.NewGuid(),
                Username = request.Username,
                Email = request.Email,
                Password = request.Password,
                Active = request.Active
            };

            _userRepository.AddUser(user);


            var response = JsonSerializer.Serialize(user);
            //var response = new UserResponse
            //{
            //    Id = user.Id,
            //    Username = user.Username,
            //    Email = user.Email
            //};
            
            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, response);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(Guid id)
        {
            var user = _userRepository.GetUser(id);
            if (user == null)
                return NotFound();

            var response = JsonSerializer.Serialize(user);
            //var response = new UserResponse
            //{
            //    Id = user.Id,
            //    Username = user.Username,
            //    Email = user.Email
            //};

            return Ok(response);
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = _userRepository.GetAllUsers();

            //var response = new GetAllUsersResponse
            //{
            //    Users = users.Select(
            //        user => new UserResponse
            //    {
            //        Id = user.Id,
            //        Username = user.Username,
            //        Email = user.Email
            //    }
            //    
            //    ).ToList()
            //};

            string response = "";

            foreach (User user in users)
            {
                response += JsonSerializer.Serialize(user);
            }

            return Ok(response);
        }
    }
}
