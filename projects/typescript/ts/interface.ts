interface ReadOnlyStringArray{
    readonly [index: number]: string;
}

class InterfaceTest{
    run(){
        console.log(this.getStringArray());
    }

    getStringArray(): ReadOnlyStringArray{
        return ["a", "b"];
    }
}

new InterfaceTest().run();