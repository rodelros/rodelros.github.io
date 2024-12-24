"use strict";
(function functionOverloadingTest() {
    display?.clear();
    function show(x) {
        display?.append(`${x}`);
    }
    show(1);
    show("hello");
})();
