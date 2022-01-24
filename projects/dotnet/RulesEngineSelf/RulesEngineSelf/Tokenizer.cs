using System.Text;

namespace RulesEngineSelf
{
    public class Tokenizer
    {
        private int _index = 0;
        private string _expression = string.Empty;
        private string _delimiters = string.Empty;

        // Markers are special characters that are returned as tokens.
        // ex. ( and ) are markers. They can be used to define inner scope of the expression. 
        private string _markers = string.Empty;
        private int _end = 0;

        private char STRING_SINGLE_QUOTE = '\'';
        public Tokenizer(string expression, string delimiters, string markers = "")
        {
            _expression = expression;
            _delimiters = delimiters;
            _end = expression.Length;
            _markers = markers;
        }

        public void Reset()
        {
            _index = 0;
        }

        public bool HasNext()
        {
            return _index < _end;
        }
        public string NextToken()
        {
            if(_index >= _end)
            {
                return string.Empty;
            }

            var start = _index;
            var token = string.Empty;

            var hasStringStarted = false;

            while(_index < _end)
            {
                // Strings are enclosed in single quotes.
                if(_expression[_index] == STRING_SINGLE_QUOTE)
                {
                    if(hasStringStarted)
                    {
                        hasStringStarted = false;
                        token = _expression.Substring(start, _index - start);

                        // Move past the string.
                        start = ++_index;
                        break;
                    }
                    else
                    {
                        // Do not include the string start quote.
                        start = ++_index;
                        hasStringStarted = true;
                        continue;
                    }
                }

                if(hasStringStarted)
                {
                    _index++;
                    continue;
                }

                if( ! String.IsNullOrEmpty(_markers) && _markers.Contains(_expression[_index]))
                {

                    // When there's a token before a marker, return the token.
                    if(start < _index)
                    {
                        token = _expression.Substring(start, _index - start);
                        start = _index;
                    }
                    else
                    {
                        token = _expression[_index].ToString();
                        _index++;
                    }

                    break;

                }

                if(_delimiters.Contains(_expression[_index]))
                {
                    token = _expression.Substring(start, _index - start);
                    if(String.IsNullOrEmpty(token))
                    {
                        _index++;
                        start = _index;
                        continue;
                    }
                    break;
                }

                if(_index == _end - 1)
                {
                    token = _expression.Substring(start, _index - start + 1);
                    _index++;
                    break;
                }

                _index++;
            }

            return token;
        }
    }
}