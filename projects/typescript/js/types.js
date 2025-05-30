"use strict";

class TypesTest {
    run() {
        let a = { id: 1, name: "test" };
        let b = { id: 1, name: "test" };
        console.log("Using type");
        this.displayAccount(a);
        console.log('Using interface');
        this.displayAccount(b);
        console.log('Using object');
        this.displayAccount({ id: 1, name: "test" });
    }
    displayAccount(account) {
        console.log(account);
    }
}
new TypesTest().run();
