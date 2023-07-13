

namespace null_check;

public static class Test
{
    public static void Run()
    {
        var department = new Department();

        
        var streetNumber = department?.Account?.Address?.Number;

        Console.WriteLine($"street number is {streetNumber} ");
        CallNum(streetNumber);
        

    }

    public static void CallNum(int? x)
    {   
        Console.WriteLine($"x + 1 = {x + 1}");
    }

}