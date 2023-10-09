using static System.Math;

namespace fp;

public class Circle
{
    public Circle(double radius) => Radius = radius;
    public double Radius{get;}
    public double Circumference 
    {
        get => PI * 2 * Radius;
    }

    private readonly Func<double, double> Square = d => Pow(d, 2);
    public double Area
    {
        get => PI * Square(Radius);
    }

}
