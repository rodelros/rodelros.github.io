interface Employee{
     login: () => boolean
    ,logout: () => boolean
}

interface Manager extends Employee{
    assignTask: (employeeId: string, taskId: string) => boolean
}

class Level1 implements Employee
{
    readonly #id:string;
    constructor(id: string){
        this.#id = id;
    }

    get id(){return this.#id;}

    login() {
       display?.append(`Employee <i>${this.#id}</i> has logged in.`);
        return true;
    }

    logout(){
        display?.append(`Employee <i>${this.#id}</i> has logged out.`)
        return true;
    }
}

class LevelA extends Level1 implements Manager{
    assignTask(employeeId: string, taskId: string){
        display?.append(`Task <i>${taskId}</i> has been assigned to <i>${employeeId}</i>`);
        return true;
    }
}

// This function creates an abstract Manager object
function createManager(): Manager{
    return new LevelA('lev1');
}

(function(){

    display?.append("<br>===============================");
    display?.append("Abstract Factory Design Pattern");
    display?.append("===============================");

    
    
    const purchaser = new Level1('p1');
    purchaser.login();
    purchaser.logout();

    const manager = createManager();
    manager.login();
    manager.assignTask(purchaser.id, 'some task');

})();