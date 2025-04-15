
// function type alias

type operation = (a: number, b: number) => number;

interface Operations {
    add : (x:number, y:number) => number;
}


// callable function with properties
type Adder = {
    x: number;
    y: number;
    // this is the signature of the function
    (x: number, y: number): number;
};


(function(){

    display?.append("<br>===============================");
    display?.append("Function declarations");
    display?.append("===============================");

    display?.append(`Using type:`);
    const operation: operation = (a, b) => a + b;
    display?.append(operation(1, 2).toString());

    display?.append(`Using interface:`);
    const operations: Operations = {add: (x, y) => x + y};
    display?.append(operations.add(1, 2).toString());

    display?.append(`Using function with properties:`);
    const adder: Adder = (x, y) => x + y;
    adder.x = 4;
    adder.y = 2;
    display?.append(adder(1, 2).toString());

})();