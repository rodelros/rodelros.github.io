using DefaultImpl;


var employee = new Employee
{
    FirstName = "Juan",
    LastName = "Pedro"
};
Console.WriteLine(employee.FullName());

var manager = new Manager();
Console.WriteLine(manager.Greet());

Action<IManager, int> GetApprovalStatus = (mngr, leaveCount)=> Console.WriteLine(mngr.IsApproved(leaveCount));
GetApprovalStatus(manager, 5);

manager.DisplayPersonId();
manager.DisplayManagerId();

