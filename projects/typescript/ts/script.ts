//----------- greeter
function greeter(name:string){
    console.log(`hello ${name}`);
}

greeter('test');


//----------- interfaces
interface Name{
    first:string;
    last:string;
}

function greeter2(name:Name){
    console.log(`Hello ${name.first} ${name.last}`);
}

greeter2({first:'Uno', last:'Dos'});


//----------- classes
class Student{
    grade:number;
    constructor(public name:Name, grade:number){
        this.grade = grade;
    }

    fullname() :string{
        return `${this.name.first} ${this.name.last}`;
    }
}

let one = new Student({first:'juan', last:'dos'}, 45);
console.log(`one's grade is ${one.grade}`);
console.log(`one's full name is ${one.fullname()}`);

//---------- functions
function Add(x:number, y:number) :number {
    return x + y;
}

console.log(`5 plus 8 is ${Add(5,8)}`);

//---------- inheritance
class Account{
    constructor(public id:string){
    }
}

class Person extends Account{
    constructor(id:string){
        super(id);
    }

    getId() :string{
        return this.id;
    }
}

let person = new Person('HFRTGF');
console.log(`person's id is ${person.getId()}`);


