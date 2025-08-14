using backend.Responses;
using backend.Domain;
using backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using backend.Requests.User;
using backend.Services;
using System.Text.Json;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/Opponent")]
    public class OpponentController : ControllerBase
    {
        private readonly UserRepository _userRepository;
        private readonly UserProgressRepository _userProgressRepository;

        public OpponentController(UserRepository userRepository, UserProgressRepository userProgressRepository)
        {
            _userRepository = userRepository;
            _userProgressRepository = userProgressRepository;
        }

        [HttpGet]
        public IActionResult GetOpponentByPlayer(Guid id)
        {
            User user = _userRepository.GetUser(id);

            if (user == null)
            {
                return NotFound();
            }

            Matchmaking matchmaking = new Matchmaking(_userRepository, _userProgressRepository);

            var foundOpponent = matchmaking.matchmake(user);

            if (foundOpponent == null)
            {
                return NotFound();
            }

            string response = JsonSerializer.Serialize(foundOpponent);
            //UserProgress[] userProgresses = { user.UserProgress };
            //Matchmaking matchmaking = new Matchmaking(userProgresses);

            //.matchmaking.findMatch(user.UserProgress);

            //var response = JsonSerializer.Serialize(user);      

            //var response = new UserResponse()
            //{
            //    Id = user.Id,
            //    Username = user.Username,
            //    Email = user.Email
            //};

            return Ok(response);
        }
    }
}