namespace DesignPatterns;

public static class Strategy
{
    public delegate decimal DiscountStrategy(decimal price);

    public static DiscountStrategy NoDiscount => price => price;
    public static DiscountStrategy CustomDiscount(decimal discountRate) => price => price * (1 - discountRate);
    public static DiscountStrategy TenPercentDiscount => price => CustomDiscount(0.1m)(price);
    public static DiscountStrategy TwentyPercentDiscount => price => CustomDiscount(0.2m)(price);

}