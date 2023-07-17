// See https://aka.ms/new-console-template for more information
using System.Text;
using Scratchpad;
/*****
// Check for null


var address = new Address();
address = null;

var account = new Account();
account.Address = address;
account = null;

var addy = account?.Address?.Street;

if (account?.Address?.Street == string.Empty)
{
    Console.WriteLine("Empty street");
}

Console.WriteLine(addy);
*****/

//ShowTitle("Interface Default Method");
//InterfaceDefaultMethod.Test.Run();

ShowTitle("Early Return");
EarlyReturn.Test.Run();

void ShowTitle(string title)
{
    var len = title.Length;
    var enclosure = new string('=', len);
    Console.WriteLine(enclosure);
    Console.WriteLine(title);
    Console.WriteLine(enclosure);
}



