using static DesignPatterns.Specification;

Action<string> appendLine = str => Console.WriteLine($"{new string('=', str.Length)}\n{str}\n{new string('=', str.Length)}\n");

appendLine("Specification Pattern");
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
