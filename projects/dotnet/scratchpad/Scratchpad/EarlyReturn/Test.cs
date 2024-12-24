namespace EarlyReturn
{
    public static class Test
    {
        public static void Run()
        {
            Console.WriteLine("=== Run Iterate ===");
            Iterate();
        }

        private static void Iterate()
        {
            int[] numbers = {2, 3, 4, 2, 0, 1};
            foreach(var num in numbers)
            {
                Console.WriteLine(num);
                if(num == 0) return;
            }
        }
    }
}