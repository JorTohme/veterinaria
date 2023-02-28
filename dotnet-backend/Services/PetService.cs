using dotnet_backend.Models;

namespace dotnet_backend.Services;

public static class PetService
{
  static List<Pet> Pets { get;}

  static PetService()
  {
    Pets = new List<Pet>
    {
      new Pet { Name = "Azul", Owner = "Jorge", Type = "Cat", Weight = 3.2, Age = 9, Castration = true },
      new Pet { Name = "Branco", Owner = "Jorge", Type = "Dog", Weight = 2.5, Age = 5, Castration = false },
    };
     
  }

  public static Pet GetPet(string name, string OwnerName)
  {
    var pet = Pets.FirstOrDefault(p => p.Name == name && p.Owner == OwnerName);
    return pet;
  }

  public static List<Pet> GetAllPet()
  {
    return Pets;
  }


}