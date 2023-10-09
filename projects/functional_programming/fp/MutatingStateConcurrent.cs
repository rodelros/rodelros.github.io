using static System.Linq.Enumerable;
using static System.Console;

namespace fp;

public static class MutatingStateConcurrent
{
    public static void Run() 
    {

        var nums = Range(-10000, 20001).Reverse().ToList();
        var task1 = () => WriteLine($"task1: {nums.Sum()}");
        var task2 = () => 
        {
            nums.Sort();
            WriteLine($"task2: {nums.Sum()}");
        };
        var task3 = () => 
        { 
            nums.Select(x => x + 2);
        };

        Parallel.Invoke(task1, task3, task2);

    }

}
