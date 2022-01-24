namespace RulesEngineSelf
{
    using Operators;

    public interface IGetResult
    {
        bool? GetResult(string op, string prop, string val, IOperator? oper);
    }
    
}