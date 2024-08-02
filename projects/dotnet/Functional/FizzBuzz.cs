namespace Functional;

public static class FizzBuzz
{
    public static string Run(int x)
    {
        var result = string.Empty;
        if(x % 3 == 0)
        {
            result += "Fizz";
        }

        if(x % 5 == 0)
        {
            result += "Buzz";
        }

        return string.IsNullOrEmpty(result) ? x.ToString() : result;
    }
        

}