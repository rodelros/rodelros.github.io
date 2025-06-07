using static DesignPatterns.Specification;
using static DesignPatterns.Strategy;

Action<string> appendLine = str => Console.WriteLine($"{new string('=', str.Length)}\n{str}\n{new string('=', str.Length)}\n");

// Specification Pattern

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
Console.WriteLine($"Password: {password} is valid: {isValid}\n");

// Strategy Pattern

appendLine("Strategy Pattern");

var products = new List<Product>
{
    new("Product A", 100, NoDiscount),
    new("Product B", 200, TenPercentDiscount),
    new("Product C", 300, TwentyPercentDiscount),
    new("Product D", 400, CustomDiscount(0.15m))
};

products.ForEach(product =>
{
    Console.WriteLine($"Product: {product.Name}, Original Price: {product.Price:C}, Discounted Price: {product.GetPrice():C}");
});

class Product(string name, decimal price, DesignPatterns.Strategy.DiscountStrategy discountStrategy)
{
    public string Name { get; } = name;
    public decimal Price { get; } = price;
    public DiscountStrategy DiscountStrategy { get; } = discountStrategy;

    public decimal GetPrice() => DiscountStrategy(Price);
}