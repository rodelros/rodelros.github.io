// See https://aka.ms/new-console-template for more information

using RulesEngineSelf;
using RulesEngineSelf.Tokenizer;

var account = new Account();
account.Amount = 50;
account.Age = 3;

var expression = "Amount  EQUAL 50 AND (Age EQUAL 3 OR YearsOfService EQUAL 4) AND Address EQUAL 'main street blues'";

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