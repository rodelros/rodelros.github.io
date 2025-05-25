using Microsoft.VisualBasic;

namespace Functional;

record Account;
record Employee(string Id, DateOnly StartDate) : Account;
record Customer(string Name) : Account
{
    public double Balance { get; set; }
    public DateOnly PaymentDue { get; set; }
}

public static class RecordStatus
{
    public static void Run()
    {
        var employee = new Employee("1234", new DateOnly(2022, 1, 1));
        var customer = new Customer("John Doe");

        employee = SetDate(employee, DateOnly.FromDateTime(DateTime.Now.AddDays(-1)));
        customer = SetDate(customer, DateOnly.FromDateTime(DateTime.Now.AddMonths(-1)));
    }

    private static Customer SetDate(Customer customer, DateOnly date) => customer with { PaymentDue = date };
    private static Employee SetDate(Employee employee, DateOnly date) => employee with { StartDate = date };

}