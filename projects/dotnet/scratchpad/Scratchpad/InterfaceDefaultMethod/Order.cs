namespace InterfaceDefaultMethod
{
    public class Order : IOrder
    {
        public Order(string id, int count, string name) => (Id, Count, Name) = (id, count, name);
        public int Count {get; }

        public string Id {get; }

        public string Name{get;}

        public string Display()
        {
            Console.WriteLine("=== Order.Display ===");
            var display = IOrder.Display(this);
            return display;
        }

    }

}