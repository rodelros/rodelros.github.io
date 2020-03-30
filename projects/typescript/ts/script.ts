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

interface Transaction{
    dte: Date;
    amount: number;
}

interface AddTransaction{
    addTransaction(t: Transaction) : void;
}

interface CancelTransaction{
    cancelTransaction(t: Transaction): void;
}

class Account implements AddTransaction{

    addTransaction(t: Transaction): void {
       console.log(`Date: ${t.dte} Amount: ${t.amount}`);
    }

    constructor(public id:string){
    }
}

class Person extends Account implements CancelTransaction{
    constructor(id:string){
        super(id);
    }

    getId() :string{
        return this.id;
    }

    cancelTransaction(t: Transaction): void{
        console.log(`Cancelling transaction ${t.amount}`);
    }
}

let person = new Person('HFRTGF');
console.log(`person's id is ${person.getId()}`);
person.addTransaction({dte: new Date(), amount: 54});

let t1:Transaction = {dte: new Date(), amount:756};
person.addTransaction(t1);

person.cancelTransaction(t1);

//-------------- generics

function identity<T>(arg:T): T{
    return arg;
}

console.log(identity('this is a string'));



