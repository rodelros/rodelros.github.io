namespace DesignPatterns;

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