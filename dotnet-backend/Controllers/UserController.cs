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

        

    }
}
