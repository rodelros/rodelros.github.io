namespace InterfaceDefaultMethod
{
    public interface IOrder
    {
        public int Count {get; }
        public string Id {get;}

        public string Name {get;}

        // default method
        public static string Display(IOrder order)
        {
            return $"Name: {order.Name}, Id: {order.Id}";
        }
    }
}