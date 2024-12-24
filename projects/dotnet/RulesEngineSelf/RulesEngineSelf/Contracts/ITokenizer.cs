namespace RulesEngineSelf.Tokenizer
{
    public interface ITokenizer
    {
        void Reset();
        bool HasNext();
        string NextToken();

    }
}