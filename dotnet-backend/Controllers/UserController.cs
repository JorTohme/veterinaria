using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;
using dotnet_backend.Models;
using dotnet_backend.Database;

namespace dotnet_backend.Controllers

{
    [ApiController]
    [Route("[controller]")]

    public class UserController : ControllerBase
    {
        public UserController() { }


        // Este endpoint devuelve todos los usuarios de la base de datos
        [HttpGet]
        public ActionResult<List<User>> GetUser() => UserService.GetAllUser();

        // Este endpoint crea un usuario
        [HttpPost]
        public IActionResult Create([FromBody] User user)
        {
            // Si el usuario ya existe, no se puede crear
            if (UserService.GetUser(user.Name) != null)
            {
                return Conflict();
            }
            UserService.AddUser(user);
            return Ok(CreatedAtAction(nameof(GetUser), new { id = user.Name }, user));
        }

        // Este endpoint devuelve los datos de un usuario específico, según su username
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

        // Este endpoint devuelve las mascotas de un usuario específico, según su username
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

        // Este endpoint crea una mascota para un usuario específico, según su username
        [HttpPost("{user}/pets", Name = "CreatePet")]
        public IActionResult CreatePet([FromBody] Pet pet)
        {
            var isUser = UserService.GetUser(pet.Owner);
            if (isUser == null)
            {
                return NotFound();
            }
            isUser.Pets.Add(pet);

            PetService.AddPet(pet);

            return CreatedAtAction("CreatePet", new { user = pet.Owner }, pet);
        }

        // Este endpoint devuelve los combos de un usuario específico, según su username
        [HttpGet("{user}/combos")]
        public ActionResult<List<Combo>> GetCombos(string user)
        {
            var isUser = UserService.GetUser(user);
            if (isUser == null)
            {
                return NotFound();
            }
            return isUser.Combos;
        }

        // Este endpoint es para los vendedores, despacha x combo de y usuario.
        [HttpPut("{user}/combos/{orderNumber}")]
        public IActionResult DispatchCombo(string user, int orderNumber)
        {
            var isUser = UserService.GetUser(user);
            if (isUser == null)
            {
                return NotFound();
            }
            var isCombo = ComboService.GetCombo(user, orderNumber);
            if (isCombo == null)
            {
                return NotFound();
            }
            isCombo.Dispatched = true;
            ComboService.UpdateCombo(isCombo);
            return NoContent();
        }

        // Este endpoint crea un combo para un usuario específico, según su username
        [HttpPost("{user}/combos", Name = "CreateCombo")]
        public IActionResult CreateCombo(string user ,[FromBody] Combo combo)
        {
            var isUser = UserService.GetUser(user);
            if (isUser == null)
            {
                return NotFound();
            }
            isUser.Combos.Add(combo);

            ComboService.AddCombo(combo);

            return CreatedAtAction("CreateCombo", new { user = user }, combo);
        }

    }
}
