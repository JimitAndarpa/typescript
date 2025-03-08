//types
// const user : {
//     name:string;
//     age:number
// } = {
//     name:"patel",
//     age:22
// }

// after Using type
type User = {
        name:string;
        age:number
    }

const user : User = {
    name: "patel",
    age: 22
}

function greet(user : User){
    console.log(`Hi I am User ${user.age}`);
}
greet(user)