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
        public IActionResult Create([FromBody] User user)
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

        [HttpGet("{user}/pets")]
        public ActionResult<List<Pet>> GetPets(string user)
        {
            var isUser = UserService.GetUser(user);
            if (isUser == null)
            {
                return NotFound();
            }
            return isUser.Pets;
        }

        [HttpPost("{user}/pets", Name = "CreatePet")]
        public IActionResult CreatePet([FromBody] Pet pet)
        {
            var isUser = UserService.GetUser(pet.Owner);
            if (isUser == null)
            {
                return NotFound();
            }
            isUser.Pets.Add(pet);
            return CreatedAtAction("CreatePet", new { user = pet.Owner }, pet);
        }

        [HttpGet("{user}/combos")]
        public ActionResult<List<string>> GetCombos(string user)
        {
            var isUser = UserService.GetUser(user);
            if (isUser == null)
            {
                return NotFound();
            }
            return isUser.Combos;
        }

        [HttpPost("{user}/combos", Name = "CreateCombo")]
        public IActionResult CreateCombo(string user ,[FromBody] object combo)
        {
            var isUser = UserService.GetUser(user);
            if (isUser == null)
            {
                return NotFound();
            }
            isUser.Combos.Add(combo.ToString());
            return CreatedAtAction("CreateCombo", new { user = user }, combo);
        }

    }
}
