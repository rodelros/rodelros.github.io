using System.Text;

namespace RulesEngineSelf
{
    using Operators;

    public class RuleExpression
    {
        private string _op = string.Empty;
        private string _prop = string.Empty;
        private string _val = string.Empty;

        private string _delimiters = " ";
        private string _markers = "()";

        private Stack<bool> _resultStack = new();

        // This will be used to save logical operations and keep track
        // of the number of new scopes that are processed.
        private Stack<string> _logicalOperationStack = new();

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

        private Dictionary<string, IOperator> _operatorsCache = new();

        private IOperator? GetOperatorToUse(string op)
        {
            var getOperator = (string oper, IOperator impl) => {

                if( ! _operatorsCache.ContainsKey(oper))
                {
                    _operatorsCache[oper] = impl;
                }

                return _operatorsCache[oper];

            };

            switch(op)
            {
                case Constants.EQUAL:
                    return getOperator(op, new Equal());

                case Constants.NOT: 
                    return getOperator(op, new Not()); 

                case Constants.LESS_THAN:
                    return getOperator(op, new LessThan());

                case Constants.GREATER_THAN:
                    return getOperator(op, new GreaterThan());      
            }

            return null;

        }

        private bool GetLogicalResult(bool oper1, bool oper2, string op)
        {
            switch(op)
            {
                case Constants.AND:
                    return oper1 && oper2;

                case Constants.OR:
                    return oper1 || oper2;
            }

            return false;
        }

        // This is that function that will be changed depending on the object.
        // todo: make this a generic function, decoupled from RuleExpression
        private bool? GetResult(string op, Account account)
        {
            bool? result = null;

            var operatorToUse = GetOperatorToUse(op);

            if(operatorToUse != null)
            {
                if(_prop == "Amount")
                {
                    result = operatorToUse.Evaluate(account.Amount, Convert.ToDecimal(_val));
                }
                else if(_prop == "JoinDate")
                {
                    result = operatorToUse.Evaluate(account.JoinDate, Convert.ToDateTime(_val));
                }
                else if(_prop == "Address")
                {
                    result = operatorToUse.Evaluate(account.Address, _val);
                }
                else if(_prop == "Age")
                {
                    result = operatorToUse.Evaluate(account.Age, Convert.ToInt32(_val));
                }
                else if(_prop == "Name")
                {
                    result = operatorToUse.Evaluate(account.Name, _val);
                }
                else if(_prop == "YearsOfService")
                {
                    result = operatorToUse.Evaluate(account.YearsOfService, Convert.ToInt32(_val));
                }
            }

            return result;
        }

        public bool? IsTrue(string expression, Account account)
        {
            if(string.IsNullOrEmpty(expression))
            {
                return false;
            }

            ResetTerms();
            var tokenizer = new Tokenizer(expression, _delimiters, _markers);

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
                    _result = GetResult(_op, account);
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