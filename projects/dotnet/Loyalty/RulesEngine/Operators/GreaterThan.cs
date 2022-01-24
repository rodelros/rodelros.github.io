namespace RulesEngine.Operators
{
    using Contracts;
    public class GreaterThan : IOperator
    {
        public bool Evaluate<T>(T propValue, T testValue) where T : IComparable<T>
        {
            return propValue.CompareTo(testValue) > 0;
        }
    }
}