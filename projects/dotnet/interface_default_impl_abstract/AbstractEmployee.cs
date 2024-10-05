namespace DefaultImpl;

public abstract class AbstractEmployee
{
    public string FirstName {get; set;} = string.Empty;
    public string LastName {get; set;} = string.Empty;
    public string FullName()
    {
        return $"{FirstName} {LastName}";
    } 
    
    public abstract void Assign();
}