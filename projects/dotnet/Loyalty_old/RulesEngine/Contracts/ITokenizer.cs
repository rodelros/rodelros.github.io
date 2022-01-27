namespace RulesEngine.Contracts
{
    public interface ITokenizer
    {
        void Reset();
        bool HasNext();
        string NextToken();

    }
}