class Department{
    name : string;
    constructor(n : string){
        this.name = n;
    }
    describe(){
        console.log('Department', this.name)
    }
}

const  accounting = new Department("accounts");
accounting.describe();