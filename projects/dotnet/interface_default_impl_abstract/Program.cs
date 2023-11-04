// See https://aka.ms/new-console-template for more information

var employee = new Employee();
employee.FirstName = "Juan";
employee.LastName = "Pedro";
Console.WriteLine(employee.FullName());

var manager = new Manager();

var person = manager as IPerson;
person.Greet();

