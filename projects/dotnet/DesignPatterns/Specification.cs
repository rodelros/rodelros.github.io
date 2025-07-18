using static DesignPatterns.Specification.Specification;

namespace DesignPatterns.Specification;

public static class Specification
{

    public delegate bool PasswordPolicy(string password);

    public static PasswordPolicy And(this PasswordPolicy left, PasswordPolicy right) =>
        password => left(password) && right(password);

    public static PasswordPolicy AtLeast(int length) => password => password.Length >= length;
    public static PasswordPolicy ContainsDigit() => password => password.Any(char.IsDigit);
    public static PasswordPolicy ContainsUppercase() => password => password.Any(char.IsUpper);
    public static PasswordPolicy ContainsLowercase() => password => password.Any(char.IsLower);
    public static PasswordPolicy ContainsAny(char[] characters) => password => password.Any(characters.Contains);

}

public static class Test
{
    public static void Run()
    {
        var policies = new List<PasswordPolicy> { AtLeast(8), ContainsDigit(), ContainsUppercase(), ContainsLowercase() };
        var password = "Password123";
        var isValid = policies.Aggregate((current, next) => current.And(next))(password);
        Console.WriteLine($"Password: {password} is valid: {isValid}");

        policies = [AtLeast(8), ContainsAny("*!@#$%^&".ToCharArray())];
        password = "Password123";
        isValid = policies.Aggregate((current, next) => current.And(next))(password);
        Console.WriteLine($"Password: {password} is valid: {isValid}");

        password = "Password123@";
        isValid = policies.Aggregate((current, next) => current.And(next))(password);
        Console.WriteLine($"Password: {password} is valid: {isValid}");
    }
}