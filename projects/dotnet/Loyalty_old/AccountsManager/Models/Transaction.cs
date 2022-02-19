using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccountsManager.Models
{
    public class Transaction
    {
        [Key]
        public uint Id { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public uint RulesetId { get; set; }

        [Required]
        public uint Credits { get; set; }

    }
}
