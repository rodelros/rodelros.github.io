

var x = Option<Account>.Some(new Account(1, "John"));
var y = Option<int>.None;
Console.Write(y);


record Account(int Id, string Name);