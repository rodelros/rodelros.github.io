public class Order
{
    public Order(string id, int count) => (Id, Count) = (id, count);
    public string Id{ get;}
    public int Count{ get;}

}