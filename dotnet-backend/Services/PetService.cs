using dotnet_backend.Models;

namespace dotnet_backend.Services;

public static class PetService
{
  static List<Pet> Pets { get;}

  static PetService()
  {
    Pets = Database.Database.GetPets();
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

  public static void AddPet(Pet pet)
  {
    Pets.Add(pet);
    Database.Database.SavePets(Pets);
  }


}