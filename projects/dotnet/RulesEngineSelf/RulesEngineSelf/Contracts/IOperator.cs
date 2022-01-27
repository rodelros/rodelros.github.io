namespace RulesEngineSelf.Operators
{
    public interface IOperator
    {
        bool Evaluate<T>(T propValue, T testValue) where T : IComparable<T>;
    }
}