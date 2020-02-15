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

class Account implements AddTransaction{

    addTransaction(t: Transaction): void {
       console.log(`Date: ${t.dte} Amount: ${t.amount}`);
    }

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
person.addTransaction({dte: new Date(), amount: 54});

let t1:Transaction = {dte: new Date(), amount:756};
person.addTransaction(t1);


