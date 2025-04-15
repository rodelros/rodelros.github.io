import {Animal, Cat} from "./animal.js";

(function(){
    display?.append("<br>=======");
    display?.append("Modules");
    display?.append("=======");

    const cat: Cat = {
        age: 10,
        color: "black"
    };

    display?.append(`cat is ${cat.age}  years old and ${cat.color} in color`);

    const animal = new Animal();
    display?.append(animal.Eat());
})();