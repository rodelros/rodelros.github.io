
using System.Net;

namespace Option;

public record Some<T>(T Value);
public record None;

public static class F
{
    public static Option.None None => new();
} 
public readonly struct Option<T>
{
    readonly bool isSome;

    readonly T Value;
    private Option(T value)
    {
        this.isSome = true;
        this.Value = value;
    }

    public static implicit operator Option<T>(Some<T> some) => new(some.Value);
    public static implicit operator Option<T>(None _) => new();
    //public static implicit operator Option<T>(T value) => value == null ? None : Some(value);
    public R Match<R>(Func<R> None, Func<T, R> Some) => isSome ? Some(this.Value) : None(); 

}

