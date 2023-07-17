using System.Reflection;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Text.Json.Serialization.Metadata;

namespace json;

public enum Role
{
     Admin
    ,User
    ,Guest
}

public class Data
{
    public int Id { get; set;}
    public string? Name { get; set;}

    public Role? Role { get; set;}

    public int Ignore  { get; set;}

    [JsonIgnore]
    public string? Description { get; set;}

    public string Serialize()
    {
        return JsonSerializer.Serialize(
            this
            ,new JsonSerializerOptions{ DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull });
    
    }

}


public static class Test
{
    public static void Run()
    {
        var data = new Data{Id = 1, Name = "test", Description = "test", Role = Role.Admin};
        Console.WriteLine("{0}", data.Serialize());
        Console.WriteLine("data.Role = {0}", data.Role?.ToString());

        TestConditionalSerialization();
    }

    public static void TestConditionalSerialization()
    {
        var data = new Data{Id = 1, Name = "test", Description = "test", Role = Role.Admin, Ignore = 1};

        var modifier = (JsonTypeInfo jsonTypeInfo) => 
        {
            if (jsonTypeInfo.Type != typeof(Data))
            {
                return;
            }

            foreach (var jsonPropertyInfo in jsonTypeInfo.Properties)
            {
                // Prevent serialization if field name is "Ignore"
                if (jsonPropertyInfo.Name == "Ignore")
                {
                    jsonPropertyInfo.ShouldSerialize = static (obj, value) => false;
                }
            }
        };

        DefaultJsonTypeInfoResolver typeInfoResolver = new();
        typeInfoResolver.Modifiers.Add(modifier);

        var options = new JsonSerializerOptions
        {
            TypeInfoResolver = typeInfoResolver
        };

        Console.WriteLine("{0}", JsonSerializer.Serialize(data, options));
    }

}

