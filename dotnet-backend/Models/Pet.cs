namespace dotnet_backend.Models

{
    public class Pet
    {
        public string? Name { get; set; }
        public string? Owner { get; set; } 
        public string? Type { get; set; }
        public double Weight { get; set; }
        public int Age { get; set; }
        public bool Castration { get; set; }
    }
}