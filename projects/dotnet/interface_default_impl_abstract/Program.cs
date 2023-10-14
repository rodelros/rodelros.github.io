

var employee = new Employee();
employee.FirstName = "Juan";
employee.LastName = "Pedro";
Console.WriteLine(employee.FullName());

var manager = new Manager();
Console.WriteLine(manager.Greet());

Action<IManager, int> GetApprovalStatus = (mngr, leaveCount)=> Console.WriteLine(mngr.IsApproved(leaveCount));
GetApprovalStatus(manager, 5);

