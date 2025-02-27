using Microsoft.AspNetCore.Mvc;
using backend;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/test")]
    public class TestController : ControllerBase
    {
        private readonly DatabaseInit _context;

        public TestController(DatabaseInit context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            try
            {
                Console.WriteLine("Fetching users...");

                if (_context.Users == null)
                {
                    Console.WriteLine("Users DbSet is NULL!");
                    return StatusCode(500, "Database context is not initialized.");
                }

                var users = _context.Users.Include(u => u.UserProgress).ToList();
                Console.WriteLine($"Number of users fetched: {users.Count}");

                if (!users.Any())
                {
                    return NotFound("No users found.");
                }

                return Ok(users);
            }
            catch (ArgumentOutOfRangeException ex)
            {
                Console.WriteLine($"ArgumentOutOfRangeException: {ex.Message}");
                return BadRequest($"Error: {ex.Message}");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Unexpected error: {ex.Message}");
                return StatusCode(500, $"Unexpected error: {ex.Message}");
            }
        }
    }
}