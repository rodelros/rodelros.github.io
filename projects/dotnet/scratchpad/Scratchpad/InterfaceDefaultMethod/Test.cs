namespace InterfaceDefaultMethod
{
    static class Test 
    {
        public static void Run()
        {
            var order = new Order("12345ds", 4, "lamp");
            Console.WriteLine(order.Display());
            
        }

    }
}