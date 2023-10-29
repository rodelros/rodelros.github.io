using fp;

// functions are first-class values in C#
// triple is assigned a function
/*****
Func<int, int> triple = x => x * 3;
var range = Enumerable.Range(1, 3);
var triples = range.Select(triple);

// avoiding state mutation
Func<int, bool> isOdd = x => x % 2 == 1;
int[] original = {7, 6, 1};

var sorted = original.OrderBy( x => x);
var filtered = original.Where(isOdd);

// non-functional

var orig2 = new List<int> {5, 7, 1};
orig2.Sort();

Console.WriteLine("-- here --");

MutatingStateConcurrent.Run();

var translation = new Dictionary<bool, string>
{
     [true] = "Vrai"
    ,[false] = "Faux"
};

var textmap = new Dictionary<string, string>
{
     {"one", "first"}
    ,{"two", "second"}
};

Console.WriteLine("\n-- Circle --");
var circle = new Circle(radius:5);

Console.WriteLine($"Radius of the circle is {circle.Radius}");
Console.WriteLine($"Circumference of the circle is {circle.Circumference}");
Console.WriteLine($"Area of the circle is {circle.Area}");

Console.WriteLine("");

Console.WriteLine("\n-- Delegates --");
Delegates.Run();

Closure.Run();
BMI.Run();
*****/
//CalculateRisk.Run();
//Records.Run();
//PatternMatching.Run();
//MapForEach.Run();
//MethodChaining.Run();
IEnumerableAsOption.Run();
