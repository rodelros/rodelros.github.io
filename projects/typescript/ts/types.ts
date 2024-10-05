type account = {id: number, name: string};
interface account2 {id: number, name: string};
class TypesTest {
    run(){
        var a: account = {id: 1, name: "test"};
        var b: account2 = {id: 1, name: "test"};

        console.log("Using type");
        this.displayAccount(a);

        console.log('Using interface');
        this.displayAccount(b);

        console.log('Using object');
        this.displayAccount({id: 1, name: "test"}); 
    }

    displayAccount(account: account) {
        console.log(account);
    }
}

new TypesTest().run();
