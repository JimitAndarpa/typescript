type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

function add(a: Combinable , b: Combinable){
    if(typeof a === "string" || typeof  b === "string"){
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(20,30));
console.log(add("20",30));

type Admin = {
    name : string;
    privillage: string[];
}
type Employee = {
    name : string;
    startDate : Date;
}

type ElevateEmployee = Admin & Employee;

const emp1 : ElevateEmployee = {
    name : 'Jimit',
    privillage : ['java', 'python'],
    startDate : new Date()

}