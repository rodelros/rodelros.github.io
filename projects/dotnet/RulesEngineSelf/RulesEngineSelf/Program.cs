// See https://aka.ms/new-console-template for more information

using RulesEngineSelf;
using RulesEngineSelf.Tokenizer;

var account = new Account();
account.Amount = 50;
account.Age = 3;
account.JoinDate = new DateTime(2022, 12, 12);
account.Address = "Abercrombie";

//var expression = "Amount  EQUAL 50 AND (Age EQUAL 3 OR YearsOfService EQUAL 4) AND Address EQUAL 'main street blues' AND JoinedDate GREATER_THAN 2022-10-11";
var expression = "JoinDate EQUAL 2022-12-12 OR JoinDate GREATER_THAN 2022-10-11";
//var expression = "Address STARTS_WITH 'Acx'";

string delimiters = " ";
string markers = "()";
ITokenizer tokenizer = new Tokenizer(expression, delimiters, markers);

var ruleExpression = new RuleExpression();
var accountGetResult = new AccountGetResult(account);
var val = ruleExpression.IsTrue(accountGetResult, tokenizer);
Console.WriteLine(val);


// test Tokenizer
/*
var tokenizer = new Tokenizer(expression, " ", "()");
while(tokenizer.HasNext())
{
    var token = tokenizer.NextToken();
    Console.WriteLine(token);
}

var word = tokenizer.NextToken();

tokenizer.Reset();
word = tokenizer.NextToken();
*/


Console.ReadLine();