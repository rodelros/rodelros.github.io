namespace RulesEngine.Contracts
{
    public interface IGetResult
    {
        bool? GetResult(string op, string prop, string val, IOperator? oper);
    }
    
}