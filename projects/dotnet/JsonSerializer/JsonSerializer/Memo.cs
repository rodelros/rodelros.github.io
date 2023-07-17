using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace JsonSerializer
{
    public class Memo
    {
        public Owner Owner { get; set; } = new Owner();
        public string Content { get; set; } = String.Empty;
        public DateTime Deadline { get; set; }
        public Status Status { get; set; }

        public int[]? Ints { get; set; }

        public List<string> Tags { get; set; } = new List<string>();
    }

    public class Owner
    {
        public string Name { get; set; } = string.Empty;
        public DateTime JoinDate { get; set; }

        public Address Address { get; set; } = new Address();
    }

    public class Address
    { 
        public int Id { get; set; }
        public string State { get; set; } = string.Empty;
    }

    public enum Status
    { 
         Active
        ,Deleted
        ,Inactive
        ,New
    }
}
