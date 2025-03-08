interface person{
    name : string;
    age: number;
    greet(text: string) : void
}
let user : person;

//we can use Type here
// type person = {
//     name : string;
//     age: number;
//     greet(text: string) : void
// }

user = {
    name: 'John',
    age: 22,
    greet(text) {
        console.log(`${text} ${this.name}`);
    },
}
console.log(user);
user.greet("Hellloooo user..");

// class interface

interface greetable{
    name:string;
    greet(text:string): void;
}

class person1 implements greetable{
    name:string;
    constructor(n: string){
        this.name = n;
    }
    greet(text : string){
        console.log(`${text}, ${this.name}`)
    }
}

const p1 = new person1("SAM")
p1.greet("Hello user..")