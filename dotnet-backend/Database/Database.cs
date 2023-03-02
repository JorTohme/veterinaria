using dotnet_backend.Models;
using dotnet_backend.Services;
using Newtonsoft.Json;

namespace dotnet_backend.Database;
public static class Database 
{
  public static List<User> GetUsers()
  {
    /*
      Aunque la base de datos no era necesaria, por motivos prácticos decidí simular una mediante unos archivos JSON.
      Me era más fácil guardar y leer datos de un archivo y no perderlos al reiniciar el servidor.
      También facilita el testing de la app.
    */

    // Lee el archivo JSON
    string json = System.IO.File.ReadAllText("./Database/User.json");
    // Deserializa el archivo JSON
    var users = JsonConvert.DeserializeObject<List<User>>(json);
    
    // Agrega las mascotas e historias de combos a cada usuario
    foreach (var user in users)
    {
      user.Pets = new List<Pet>();
      foreach (var pet in PetService.GetAllPet())
      {
        if (pet.Owner == user.Name)
        {
          user.Pets.Add(pet);
        }
      }

      user.Combos = new List<Combo>();
      foreach (var combo in ComboService.GetAllCombos())
      {
        if (combo.User == user.Name)
        {
          user.Combos.Add(combo);
        }
      }
    }
    return users;
  }
  public static void SaveUsers(List<User> users)
  {
    // Serializa la lista de usuarios
    var json = JsonConvert.SerializeObject(users);
    // Guarda el archivo JSON
    System.IO.File.WriteAllText("./Database/User.json", json);
  }

  public static List<Pet> GetPets()
  {
    // Lee el archivo JSON
    string json = System.IO.File.ReadAllText("./Database/Pet.json");
    // Deserializa el archivo JSON
    var pets = JsonConvert.DeserializeObject<List<Pet>>(json);
    
    return pets;
  }

  public static void SavePets(List<Pet> pets)
  {
    // Serializa la lista de mascotas
    var json = JsonConvert.SerializeObject(pets);
    // Guarda el archivo JSON
    System.IO.File.WriteAllText("./Database/Pet.json", json);
  }

  public static List<Combo> GetCombos()
  {
    // Lee el archivo JSON
    string json = System.IO.File.ReadAllText("./Database/Combo.json");
    // Deserializa el archivo JSON
    var combos = JsonConvert.DeserializeObject<List<Combo>>(json);
    
    return combos;
  }

  public static void SaveCombos(List<Combo> combos)
  {
    // Serializa la lista de historias de combos
    var json = JsonConvert.SerializeObject(combos);
    // Guarda el archivo JSON
    System.IO.File.WriteAllText("./Database/Combo.json", json);
  }

  public static List<Seller> GetSellers()
  {
    // Lee el archivo JSON
    string json = System.IO.File.ReadAllText("./Database/Seller.json");
    // Deserializa el archivo JSON
    var seller = JsonConvert.DeserializeObject<List<Seller>>(json);
    
    return seller;
  }

  public static void SaveSellers(List<Seller> sellers)
  {
    // Serializa la lista de vendedores
    var json = JsonConvert.SerializeObject(sellers);
    // Guarda el archivo JSON
    System.IO.File.WriteAllText("./Database/Seller.json", json);
  }
}