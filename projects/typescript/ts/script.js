var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//----------- greeter
function greeter(name) {
    console.log("hello " + name);
}
greeter('test');
function greeter2(name) {
    console.log("Hello " + name.first + " " + name.last);
}
greeter2({ first: 'Uno', last: 'Dos' });
//----------- classes
var Student = /** @class */ (function () {
    function Student(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    Student.prototype.fullname = function () {
        return this.name.first + " " + this.name.last;
    };
    return Student;
}());
var one = new Student({ first: 'juan', last: 'dos' }, 45);
console.log("one's grade is " + one.grade);
console.log("one's full name is " + one.fullname());
//---------- functions
function Add(x, y) {
    return x + y;
}
console.log("5 plus 8 is " + Add(5, 8));
var Account = /** @class */ (function () {
    function Account(id) {
        this.id = id;
    }
    Account.prototype.addTransaction = function (t) {
        console.log("Date: " + t.dte + " Amount: " + t.amount);
    };
    return Account;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id) {
        return _super.call(this, id) || this;
    }
    Person.prototype.getId = function () {
        return this.id;
    };
    return Person;
}(Account));
var person = new Person('HFRTGF');
console.log("person's id is " + person.getId());
person.addTransaction({ dte: new Date(), amount: 54 });
var t1 = { dte: new Date(), amount: 756 };
person.addTransaction(t1);
