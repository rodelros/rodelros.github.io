using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccountsManager.Models
{
    public class Account
    {
        [Key]
        public uint Id { get; set; }

        [Required]
        public DateTime Created { get; set; }

        public uint Credits { get; set; }

        public List<Transaction> Transactions { get; set; } = new List<Transaction>();
    }
}
