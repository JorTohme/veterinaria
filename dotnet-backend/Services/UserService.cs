using dotnet_backend.Models;

namespace dotnet_backend.Services;

public static class UserService
{
  static List<User> Users { get;}

  static UserService()
  {
    Users = new List<User>
    {
      new User { Name = "Jorge", Password = "1234", 
      Pets = new List<Pet> { PetService.GetPet("Azul", "Jorge"), PetService.GetPet("Branco", "Jorge") },
      Combos = new List<string> { "Alimento: 1.6kg, Complementos: 1" } },
    };
     
  }

  public static List<User> GetAllUser() => Users;

  public static void AddUser(User user)
  {
    Users.Add(user);
  }

  public static User GetUser(string name) => Users.FirstOrDefault(u => u.Name == name);


}