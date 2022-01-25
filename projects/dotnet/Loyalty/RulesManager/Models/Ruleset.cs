using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RulesManager.Models
{
    public class Ruleset
    {
        [Key]
        public uint Id { get; set; }

        [Required]
        public DateTime Created { get; set; }

        [Required]
        public DateTime EffectiveStart { get; set; }

        [Required]
        public DateTime EffectiveEnd { get; set; }

        [Required]
        public List<Rule> Rules { get; set;} = new List<Rule>();
    }
}
