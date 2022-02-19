using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace RulesManager.Models
{
    public class Rule
    {
        [Key]
        public uint Id { get; set; }

        [Required]
        public string Expression { get; set; } = string.Empty;
    }
}
