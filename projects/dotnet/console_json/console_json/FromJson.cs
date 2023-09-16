using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace console_json
{
    public class FromJson
    {
        public Metadata? Metadata { get; set; }
    }

    public class Metadata
    {
        public string Documentation_Url { get; set; } = String.Empty;
    }
}
