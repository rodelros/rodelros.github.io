using System.Text.Json;

namespace json.Extensions
{
    public static class JsonElementExtensions
    {
         public static JsonElement Prop(this JsonElement element, string name)
        {
            JsonElement retVal = new JsonElement();
            element.TryGetProperty(name, out retVal);
            return retVal;
        }       
    }

}