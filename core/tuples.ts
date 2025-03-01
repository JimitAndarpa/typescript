const person : {
    name:string;
    age:number;
    skills:string[];
    product:[string , number]
}={
    name:"jimit",
    age:24,
    skills:["react","nodejs"],
    product:["react",2]

}
// in tuple if the first declared string we have to use first string to source element

// if want to upadte the value in tuple product
//we can do this like person.product[0] = 11 because 0 index the value is string..
// should be use value according what we have passed.
