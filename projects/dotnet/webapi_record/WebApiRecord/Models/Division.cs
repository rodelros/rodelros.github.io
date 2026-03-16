namespace WebApiRecord.Models;

public readonly record struct Division
{
    public string? Name { get; init; }
    public string? Description { get; init; }
}

public static class DivisionExtensions
{
    extension(Division division)
    {
        public bool IsValid() => 
            !string.IsNullOrWhiteSpace(division.Name) 
            && !string.IsNullOrWhiteSpace(division.Description);
    }
}