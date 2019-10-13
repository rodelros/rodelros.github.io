def if_elif_else():
    x = int(input("Enter an integer: "))
    if x < 0:
        x = 0
        print("negative changed to zero")
    elif x == 0:
        print('zero')
    elif x == 1:
        print('single')
    else:
        print('more than one')

def if_elif_else_loop():
    c = True
    while c:
        if_elif_else()
        c = input('Continue[y/n]? ')
        if(c[0] == 'n' or c[0] == 'N'):
            break

def for_in():
    s = "what"
    for x in s:
        print(x)

#if_elif_else_loop()
for_in()