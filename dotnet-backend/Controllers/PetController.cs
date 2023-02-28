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

        [HttpGet]
        public ActionResult<List<Pet>> GetPet() => PetService.GetAllPet();
        
    }
}