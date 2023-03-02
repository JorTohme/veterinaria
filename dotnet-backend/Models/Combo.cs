namespace dotnet_backend.Models

{
    public class Combo
    {
       public string? User { get; set; }
       public int orderNumber { get; set; }
       public string? Description { get; set; }
       public bool Dispatched { get; set; }
    }
}