namespace DesignPatterns.StrategyCache;

public record Context(
    Func<string, double> GetAmount,
    Func<string> GetLabel,
    Func<string, string> GetDescription
);

public static class AmountStrategy
{
    public static Func<string, double> StandardAmount => item => item switch
    {
        "A" => 10.0,
        "B" => 20.0,
        "C" => 30.0,
        _ => 0.0
    };

    public static Func<string, double> DiscountedAmount(double discountRate) => item => StandardAmount(item) * (1 - discountRate);
}

public static class LabelStrategy
{
    public static Func<string> StandardLabel => () => "Standard Product";
    public static Func<string> PremiumLabel => () => "Premium Product";
}

public static class DescriptionStrategy
{
    public static Func<string, string> StandardDescription => item => $"This is a standard description for item {item}.";
    public static Func<string, string> PremiumDescription => item => $"This is a premium description for item {item}, with extra details.";
}

class AmountService
{
    public static void ProcessAmount(Context context, string item)
    {
        var amount = context.GetAmount(item);
        var label = context.GetLabel();
        var description = context.GetDescription(item);
        Console.WriteLine($"Processing {label}: {description} Amount: {amount:C}");
    }

}


public static class Test
{
    public static void Run()
    {
        var context = new Context(AmountStrategy.StandardAmount, LabelStrategy.StandardLabel, DescriptionStrategy.StandardDescription);
        AmountService.ProcessAmount(context, "A");

        AmountService.ProcessAmount(new Context(AmountStrategy.DiscountedAmount(0.1), LabelStrategy.PremiumLabel, DescriptionStrategy.PremiumDescription), "B");

        var discount = 0.1;
        var strategy = AmountStrategy.DiscountedAmount(discount);
        discount = 0.9; // Change the variable AFTER creating the strategy
        AmountService.ProcessAmount(new Context(strategy, LabelStrategy.PremiumLabel, DescriptionStrategy.PremiumDescription), "C");
    }

}