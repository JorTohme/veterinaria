using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Services;
using dotnet_backend.Models;

namespace dotnet_backend.Controllers

{
    [ApiController]
    [Route("[controller]")]

    public class SellerController : ControllerBase
    {
        public SellerController() { }

        // Este endpoint retorna todos los vendedores
        [HttpGet]
        public ActionResult<List<Seller>> GetPet() => SellerService.GetAllSellers();

        // Este endpoint registra un nuevo vendedor
        [HttpPost]
        public ActionResult<Seller> AddSeller(Seller seller)
        {
            // Si el vendedor ya existe, no se puede crear
            if (SellerService.GetSeller(seller.Name) != null)
            {
                return Conflict();
            }
            SellerService.AddSeller(seller);
            return seller;
        }
        
    }
}