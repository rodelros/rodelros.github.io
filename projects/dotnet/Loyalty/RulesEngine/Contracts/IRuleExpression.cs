namespace RulesEngine.Contracts
{
    public interface IRuleExpression
    {
        bool? IsTrue(IGetResult getResultImpl, ITokenizer tokenizer);
    }
}