
using static DesignPatterns.Strategy.Strategy;

namespace DesignPatterns.Strategy;

public static class Strategy
{
    public delegate decimal DiscountStrategy(decimal price);

    public static DiscountStrategy NoDiscount => price => price;
    public static DiscountStrategy CustomDiscount(decimal discountRate) => price => price * (1 - discountRate);
    public static DiscountStrategy TenPercentDiscount => price => CustomDiscount(0.1m)(price);
    public static DiscountStrategy TwentyPercentDiscount => price => CustomDiscount(0.2m)(price);

}

class Product(string name, decimal price, DiscountStrategy discountStrategy)
{
    public string Name { get; } = name;
    public decimal Price { get; } = price;
    public DiscountStrategy DiscountStrategy { get; } = discountStrategy;

    public decimal GetPrice() => DiscountStrategy(Price);
}

public static class Test
{

    public static void Run()
    {
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
    }

}