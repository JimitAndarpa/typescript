// enums
enum Role {ADMIN , USER, CLIENT}
const person1 = {
    name: "jimit",
    age: 24,
    skills:["react","node"],
    role:"Author"
}

if(person1.role === "Author"){
    console.log("author")
}else if(person1.role === "User"){
    console.log("user")
}