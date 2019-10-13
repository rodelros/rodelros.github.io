
def greeting():
    greeting = input("Write a greeting: ")
    print(greeting)

def string_test():
    #string
    word = 'python'
    print(word)
    print(word[1:2])
    print(word[:4])
    print(word[1:])

def lists_test():
    squares = [1, 2, 'what', 6.5]
    print(squares[0:1])
    print(squares[1:3])
    print(squares[2:4])

    print("\nsquares.append(6)")
    squares.append(6)
    print(squares)

    print("\nsquares[2] = 8")
    squares[2] = 8
    print(squares)

def loops_test():
    a,b = 0,1
    while a < 10:
        print(a, end=", ")
        a,b = b, a+b

#string_test()
#lists_test()
loops_test()