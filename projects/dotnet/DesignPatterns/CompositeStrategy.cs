namespace DesignPatterns.CompositeStrategy;

public delegate bool DiscountPolicy(Product product);
public delegate decimal DiscountStrategy(Product product);

public class Product(string Name, decimal Price)
{
    public string Name { get; } = Name;
    public decimal Price { get; } = Price;

    private List<DiscountStrategy> _discountStrategies = [];
    public void AddDiscount(DiscountStrategy discountStrategy)
    {
        _discountStrategies.Add(discountStrategy);
    }

    public void RemoveDiscount(DiscountStrategy discountStrategy)
    {
        _discountStrategies.Remove(discountStrategy);
    }

    private decimal GetDiscountedPrice()
    {
        decimal totalDiscount = _discountStrategies.Sum(strategy => strategy(this));
        return Math.Max(0, Price - Math.Min(totalDiscount, Price));
    }
    
    public decimal DiscountedPrice
    {
        get => GetDiscountedPrice();
    }
}

public static class DiscountPolicies
{ 
    public static DiscountPolicy NoDiscount => product => true;
    public static DiscountPolicy StartsWithC => product => product.Name.StartsWith("C", StringComparison.OrdinalIgnoreCase);
    public static DiscountPolicy IsPriceAbove(decimal threshold) => product => product.Price > threshold;
    public static DiscountPolicy CustomPolicy(Func<Product, bool> predicate) => product => predicate(product);
}

public static class DiscountStrategies
{
    public static DiscountStrategy StartsWithCDiscount => (product) =>
        DiscountPolicies.StartsWithC(product) ? product.Price * 0.1m : 0;


    public static DiscountStrategy PriceAboveDiscount(decimal threshold) =>
        product => DiscountPolicies.IsPriceAbove(threshold)(product) ? product.Price * 0.2m : 0;
}

public static class Test
{
    static void Display(this Product product)
    { 
        Console.WriteLine($"Product: {product.Name}, Original Price: {product.Price:C}, Discounted Price: {product.DiscountedPrice:C}");
    }

    public static void Run()
    {
        var productA = new Product("Apple", 100);
        var productC = new Product("Cucumber", 100);


        productA.AddDiscount(DiscountStrategies.PriceAboveDiscount(10));
        productA.AddDiscount(DiscountStrategies.StartsWithCDiscount);

        productC.AddDiscount(DiscountStrategies.StartsWithCDiscount);
        productC.AddDiscount(DiscountStrategies.PriceAboveDiscount(50));
        productC.RemoveDiscount(DiscountStrategies.PriceAboveDiscount(50));

        productA.Display();
        productC.Display();

    }
}