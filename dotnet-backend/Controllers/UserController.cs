using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers

{
    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        public UserController() { }

        [HttpGet]
        public ActionResult<List<User>> GetUser() => UserService.GetAllUser();

        [HttpPost]
        public IActionResult Create([FromHeader] User user)
        {
            UserService.AddUser(user);
            return CreatedAtAction(nameof(GetUser), new { id = user.Name }, user);
        }

        [HttpGet("{user}")]
        public ActionResult<User> GetUser(string user)
        {
            var isUser = UserService.GetUser(user);
            if (isUser == null)
            {
                return NotFound();
            }
            return isUser;
        }

    }
}
