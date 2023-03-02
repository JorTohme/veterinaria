using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;
using dotnet_backend.Models;
using dotnet_backend.Database;

namespace dotnet_backend.Controllers

{
    [ApiController]
    [Route("[controller]")]

    public class LoginController : ControllerBase
    {
        public LoginController() { }

        // Este endpoint comprueba si el usuario existe y si la contraseña es correcta
        // Si es correcto devuelve un status 200
        [HttpPost]
        public IActionResult Check([FromBody] User user)
        {
            var isUser = UserService.GetUser(user.Name);
            if (isUser == null)
            {
                return NotFound();
            }
            if (isUser.Password != user.Password)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpPost("Seller")]
        public IActionResult CheckSeller([FromBody] Seller seller)
        {
            var isSeller = SellerService.GetSeller(seller.Name);
            if (isSeller == null)
            {
                return NotFound();
            }
            if (isSeller.Password != seller.Password)
            {
                return NotFound();
            }
            return Ok();
        }

    }
}
