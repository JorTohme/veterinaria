using dotnet_backend.Models;
using dotnet_backend.Database;

namespace dotnet_backend.Services;

public static class UserService
{
  static List<User> Users { get;}

  static UserService()
  {
    Users = Database.Database.GetUsers();
  }

  public static List<User> GetAllUser() => Users;

  public static void AddUser(User user)
  {
    Users.Add(user);
    Database.Database.SaveUsers(Users);
  }

  public static User GetUser(string name) => Users.FirstOrDefault(u => u.Name == name);

}