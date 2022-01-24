namespace RulesEngine.Operators
{
    public class Check
    {
        public static string[] COMPARISON = {
             Constants.EQUAL
            ,Constants.LESS_THAN
            ,Constants.GREATER_THAN
            ,Constants.NOT };
        public static string[] LOGICAL = {
             Constants.AND
            ,Constants.OR };

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
    }
}