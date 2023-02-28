namespace dotnet_backend.Models

{
    public class User
    {
        public string? Name { get; set; }
        public string? Password { get; set; }

        public List<Pet>? Pets { get; set; }
        
        public List<string>? Combos { get; set; }
    }
}