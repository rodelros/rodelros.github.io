using System.Text;

namespace RulesEngine
{
    using Contracts;
    using Operators;


    public class RuleExpression : IRuleExpression
    {
        private string _op = string.Empty;
        private string _prop = string.Empty;
        private string _val = string.Empty;

        private readonly Stack<bool> _resultStack = new();

        // This will be used to save logical operations and keep track
        // of the number of new scopes that are processed.
        private readonly Stack<string> _logicalOperationStack = new();

        private bool? _result = null;

        private void ResetTerms()
        {
            _op = string.Empty;
            _prop = string.Empty;
            _val = string.Empty;
        }

        private bool ShouldEvaluate()
        {
            return _op != string.Empty && _prop != string.Empty && _val != string.Empty;
        }

        private readonly Dictionary<string, IOperator> _operatorsCache = new();

        private IOperator? GetOperatorToUse(string op)
        {
            var getOperator = (string oper, IOperator impl) => {

                if( ! _operatorsCache.ContainsKey(oper))
                {
                    _operatorsCache[oper] = impl;
                }

                return _operatorsCache[oper];

            };

            return op switch
            {
                Constants.EQUAL => getOperator(op, new Equal()),
                Constants.NOT => getOperator(op, new Not()),
                Constants.LESS_THAN => getOperator(op, new LessThan()),
                Constants.GREATER_THAN => getOperator(op, new GreaterThan()),
                _ => null,
            };
        }

        private static bool GetLogicalResult(bool oper1, bool oper2, string op)
        {
            return op switch
            {
                Constants.AND => oper1 && oper2,
                Constants.OR => oper1 || oper2,
                _ => false,
            };
        }

        public bool? IsTrue(IGetResult getResultImpl, ITokenizer tokenizer)
        {
            ResetTerms();

            while(tokenizer.HasNext())
            {

                var token = tokenizer.NextToken();

                if(Check.IsComparisonOperator(token))
                {
                    _op = token;
                    continue;
                }

                if(Check.IsLogicalOperator(token))
                {
                    if(_result != null)
                    {
                        _resultStack.Push(_result.Value);
                        _logicalOperationStack.Push(token);
                        _result = null;
                        ResetTerms();
                    }
                    
                    continue;
                }

                if(Check.IsScopeStart(token))
                {
                    if(_result != null)
                    {
                        _resultStack.Push(_result.Value);
                        _result = null;
                        ResetTerms();                        
                    }
                    _logicalOperationStack.Push(token);
                    continue;
                }

                if(Check.IsScopeEnd(token))
                {
                    if(_logicalOperationStack.Any() && _result != null)
                    {
                        var stackItem = _logicalOperationStack.Pop();
                        if(stackItem != Constants.SCOPE_START)
                        {
                            throw new Exception("Invalid expression");
                        }
                    }
                    continue;
                }

                if(!string.IsNullOrEmpty(_op))
                {
                    _val = token;
                }
                else
                {
                    _prop = token;
                    continue;
                }

                if(ShouldEvaluate())
                {
                    _result = getResultImpl.GetResult(_op, _prop, _val, GetOperatorToUse(_op));
                    ResetTerms();

                    // Evaluate all the saved logical operations.
                    // Stop when the SCOPE_START is reached, only the SCOPE_END block will evaluate and pop 
                    // the SCOPE_START.
                    while(_logicalOperationStack.Any() 
                    && _result != null 
                    && _logicalOperationStack.Peek() != Constants.SCOPE_START)
                    {
                        var logicalOp = _logicalOperationStack.Pop();
                        var previousResult = _resultStack.Pop();
                        _result = GetLogicalResult((bool)_result, previousResult, logicalOp);
                    }
                }
            }


            return _result;
        }

    }
}