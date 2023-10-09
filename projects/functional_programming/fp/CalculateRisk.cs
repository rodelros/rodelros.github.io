using System.Net;

namespace fp;


public static class CalculateRisk
{
    internal readonly struct Age
    {
        private int Value {get;}
        public Age(int value)
        {
            if(value < 0 || value > 120) throw new ArgumentOutOfRangeException(nameof(value));
            Value = value;
        }

        public static bool operator <(Age l, Age r) => l.Value < r.Value;
        public static bool operator >(Age l, Age r) => l.Value > r.Value;
        public static bool operator ==(Age l, Age r) => l.Value == r.Value;
        public static bool operator !=(Age l, Age r) => l.Value != r.Value;
        public static bool operator <(Age l, int r) => l.Value < r;
        public static bool operator >(Age l, int r) => l.Value > r;

        public override string ToString()
        {
            return $"{Value}";
        }

        public override bool Equals(object? obj)
        {
            if((obj != null) && obj is Age age)
            {
                return age.Value == Value;
            }

            return false;
        }

        public override int GetHashCode()
        {
            return Value;
        }
    }

    enum Risk {Low, Medium, High}

    static Risk GetRisk(Age age) => (age < 60) ? Risk.Low : Risk.Medium;

    public static void Run()
    {
        Console.WriteLine("\n-- CalculateRisk --");
        var age = new Age(59);
        var risk = GetRisk(age);
        Console.WriteLine($"Age {age} is {risk} risk.");
    }


}
