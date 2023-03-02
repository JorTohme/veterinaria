using dotnet_backend.Models;
using dotnet_backend.Database;

namespace dotnet_backend.Services;

public static class SellerService
{
  static List<Seller> Sellers { get;}

  static SellerService()
  {
    Sellers = Database.Database.GetSellers();
  }

  public static Seller GetSeller(string name) => Sellers.FirstOrDefault(u => u.Name == name);
  public static List<Seller> GetAllSellers() => Sellers;
  
  public static void AddSeller(Seller seller)
  {
    Sellers.Add(seller);
    Database.Database.SaveSellers(Sellers);
  }

}