// See https://aka.ms/new-console-template for more information
using console_json;
using System.Text.Json;

var sample = new Sample { Name = "This is test", Value = 5, IsActive = true};

var json = JsonSerializer.Serialize(sample);

var deser = JsonSerializer.Deserialize<Sample>(json);

var fs = new FileStream("list.json", FileMode.Open, FileAccess.Read, FileShare.Read);
var res = JsonSerializer.Deserialize<List<Product>>(fs, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
//FromJson? fromJson = JsonSerializer.Deserialize<FromJson>(fs, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });

Console.WriteLine(deser?.Name);
Console.Read();
