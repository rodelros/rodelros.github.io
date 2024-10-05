(function functionOverloadingTest(){

    display?.clear();
    function show<T>(x:T){
        display?.append(`${x}`);
    }

    show(1);
    show("hello");
})();