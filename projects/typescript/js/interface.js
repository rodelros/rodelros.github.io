"use strict";
class InterfaceTest {
    run() {
        console.log(this.getStringArray());
    }
    getStringArray() {
        return ["a", "b"];
    }
}
new InterfaceTest().run();
