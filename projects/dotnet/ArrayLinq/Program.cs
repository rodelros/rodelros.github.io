// See https://aka.ms/new-console-template for more information
//Console.WriteLine("Hello, World!");
using System.Numerics;

int[] arr = {2,4,5,2,8,5,1,1,1,1,1,1,1,4,9,3,4,5,2,5,9}; 

var query = arr
                .GroupBy(i => i)
                .OrderByDescending(g => g.Count());

foreach(var num in query)
{
    Console.WriteLine(num.Key);
}

Add();


void Add()
{


    Console.WriteLine("================");
    Console.WriteLine("=====  Add =====");
    Console.WriteLine("================");

    var num1 = "123476654687687657655";
    var num2 = "5987978767676765654654454381";

    BigInteger bInt1 = 0;
    BigInteger bInt2 = 0;

    try
    {
        bInt1 = BigInteger.Parse(num1);
        bInt2 = BigInteger.Parse(num2);
        Console.WriteLine("Sum is {0}", bInt1 + bInt2);
    }

    catch(FormatException)
    {
        Console.WriteLine("Unable to cast string to BigInteger.");
    }

    catch(OutOfMemoryException)
    {
        Console.WriteLine("Unable to process operation.");
    }



}


