using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RulesEngineSelf.Operators
{
    public class StringStartsWith:IOperator
    {
        public bool Evaluate<T>(T propValue, T testValue) where T : IComparable<T>
        {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
#pragma warning disable CS8604 // Possible null reference argument.
            return propValue.ToString().StartsWith(testValue.ToString());
#pragma warning restore CS8604 // Possible null reference argument.
#pragma warning restore CS8602 // Dereference of a possibly null reference.
        }
    }
}
