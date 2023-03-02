using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;
using dotnet_backend.Models;
using dotnet_backend.Database;

namespace dotnet_backend.Controllers

{
    [ApiController]
    [Route("[controller]")]

    public class ComboController : ControllerBase
    {
        public ComboController() { }


        // Este endpoint simplemente devuelve todos los combos de la base de datos
        [HttpGet]
        public IActionResult Get()
        {
            var combos = ComboService.GetAllCombos();
            return Ok(combos);
        }

    }
}
