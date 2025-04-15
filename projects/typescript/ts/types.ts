type account = {id: number, name: string};
interface Account2 {id: number, name: string};

class TypesTest {
    run(){
        let a: account = {id: 1, name: "test"};
        let b: Account2 = {id: 1, name: "test"};

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
