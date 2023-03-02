using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers

{
    [ApiController]
    [Route("[controller]")]

    public class PetController : ControllerBase
    {
        public PetController() { }

        // Este endpoint devuelve todas las mascotas de la base de datos
        [HttpGet]
        public ActionResult<List<Pet>> GetPet() => PetService.GetAllPet();
        
    }
}