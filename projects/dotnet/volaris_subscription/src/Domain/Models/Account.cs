using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Models
{
    public class Account(string id, string firstName, string lastName, string email)
    {
        public string Id { get; private set; } = id;
        public string FirstName { get; private set; } = firstName;
        public string LastName { get; private set; } = lastName;
        public string Email { get; private set; } = email;

        public VClubSubscription? VClubSubscription { get; set; } = null;
        public VPassSubscription? VPassSubscription { get; set; } = null;

    }
}
