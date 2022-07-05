namespace RulesEngineSelf.Operators
{
    public class Check
    {
        private static readonly string[] COMPARISON = {
             Constants.EQUAL
            ,Constants.LESS_THAN
            ,Constants.GREATER_THAN
            ,Constants.NOT };

        private static readonly string[] LOGICAL = {
             Constants.AND
            ,Constants.OR };

        private static readonly string[] STRING = { 
            Constants.STARTS_WITH
            ,Constants.CONTAINS
        };

        public static bool IsComparisonOperator(string term){
            return Check.COMPARISON.Contains(term);
        }
        public static bool IsLogicalOperator(string term){
            return Check.LOGICAL.Contains(term);
        }

        public static bool IsScopeStart(string term)
        {
            return term == Constants.SCOPE_START;
        }

        public static bool IsScopeEnd(string term)
        {
            return term == Constants.SCOPE_END;
        }

        public static bool IsStringOperator(string term)
        { 
            return Check.STRING.Contains(term);
        }
    }
}