var str = "abcdefg";
var charCount = 2;
var strList = new List<string>();
var currentCount = 1; 

var isOddLength = (str.Length % 2) == 0;

if( ! isOddLength)
{
    str = str + $"_";

}



for(var i = 0; i < str.Length; i++)
{

    if(currentCount == 2)
    {
        Console.WriteLine($"{str[i-1]}{str[i]}");
        //strList.Add($"{str[i-1]}{str[i]}");
        i++;
        currentCount = 1;
    } 

    currentCount++;

}




