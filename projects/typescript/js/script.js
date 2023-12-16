"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greeter(name) {
    console.log(`hello ${name}`);
}
greeter('test');
function greeter2(name) {
    console.log(`Hello ${name.first} ${name.last}`);
}
greeter2({ first: 'Uno', last: 'Dos' });
class Student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    fullname() {
        return `${this.name.first} ${this.name.last}`;
    }
}
let one = new Student({ first: 'juan', last: 'dos' }, 45);
console.log(`one's grade is ${one.grade}`);
console.log(`one's full name is ${one.fullname()}`);
function Add(x, y) {
    return x + y;
}
console.log(`5 plus 8 is ${Add(5, 8)}`);
class Account {
    id;
    addTransaction(t) {
        console.log(`Date: ${t.dte} Amount: ${t.amount}`);
    }
    constructor(id) {
        this.id = id;
    }
}
class Person extends Account {
    constructor(id) {
        super(id);
    }
    getId() {
        return this.id;
    }
    cancelTransaction(t) {
        console.log(`Cancelling transaction ${t.amount}`);
    }
}
let person = new Person('HFRTGF');
console.log(`person's id is ${person.getId()}`);
person.addTransaction({ dte: new Date(), amount: 54 });
let t1 = { dte: new Date(), amount: 756 };
person.addTransaction(t1);
person.cancelTransaction(t1);
function identity(arg) {
    return arg;
}
console.log(identity('this is a string'));
//# sourceMappingURL=script.js.map