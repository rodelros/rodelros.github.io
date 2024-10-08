using System.Diagnostics.CodeAnalysis;

public readonly struct Option<T>
{
    public static Option<T> None => default;
    public static Option<T> Some(T value) => new Option<T>(value);

    readonly bool isSome;
    readonly T value;

    Option(T value)
    {
        this.value = value;
        isSome = this.value is { };
    }

    public bool IsSome([MaybeNullWhen(false)]out T value)
    {
        value = this.value;
        return isSome;
    }
}
