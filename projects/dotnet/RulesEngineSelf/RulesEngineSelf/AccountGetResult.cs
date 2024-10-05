namespace RulesEngineSelf
{
    using Operators;
    public class AccountGetResult : IGetResult
    {
        private readonly Account _account;

        public AccountGetResult(Account account)
        {
            _account = account;
        }
        public bool? GetResult(string op, string prop, string val, IOperator? oper)
        {
            bool? result = null;


            if(oper != null)
            {
                if(prop == "Amount")
                {
                    result = oper.Evaluate(_account.Amount, Convert.ToDecimal(val));
                }
                else if(prop == "JoinDate")
                {
                    result = oper.Evaluate(_account.JoinDate, Convert.ToDateTime(val));
                }
                else if(prop == "Address")
                {
                    result = oper.Evaluate(_account.Address, val);
                }
                else if(prop == "Age")
                {
                    result = oper.Evaluate(_account.Age, Convert.ToInt32(val));
                }
                else if(prop == "Name")
                {
                    result = oper.Evaluate(_account.Name, val);
                }
                else if(prop == "YearsOfService")
                {
                    result = oper.Evaluate(_account.YearsOfService, Convert.ToInt32(val));
                }
            }

            return result;
        }
    }

}