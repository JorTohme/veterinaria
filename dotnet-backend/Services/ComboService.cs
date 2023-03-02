using dotnet_backend.Models;
using dotnet_backend.Database;

namespace dotnet_backend.Services;

public static class ComboService
{
  static List<Combo> Combos { get;}

  static ComboService()
  {
      Combos = Database.Database.GetCombos();
  }

  public static List<Combo> GetAllCombos() => Combos;

  public static void AddCombo(Combo combo)
  {
      Combos.Add(combo);
      Database.Database.SaveCombos(Combos);
  }

  public static Combo GetCombo(string name, int orderNumber) => Combos.FirstOrDefault(u => u.User == name && u.orderNumber == orderNumber);

  public static void UpdateCombo(Combo combo)
  {
      var index = Combos.FindIndex(u => u.User == combo.User && u.orderNumber == combo.orderNumber);
      if (index == -1)
      {
          return;
      }
      Combos[index] = combo;
      Database.Database.SaveCombos(Combos);
  }

}