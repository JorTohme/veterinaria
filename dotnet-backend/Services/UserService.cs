using dotnet_backend.Models;

namespace dotnet_backend.Services;

public static class UserService
{
  static List<User> Users { get;}

  static UserService()
  {
    Users = new List<User>
    {
      new User { Name = "John", Password = "1234" },
      new User { Name = "Jane", Password = "1234" },
      new User { Name = "Bob", Password = "1234" }
    };
     
  }

  public static List<User> GetAllUser() => Users;

  public static void AddUser(User user)
  {
    Users.Add(user);
  }

  public static User GetUser(string name) => Users.FirstOrDefault(u => u.Name == name);

}