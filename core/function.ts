function add(num1: number, num2: number): number{
    return num1 + num2;
}
console.log(add(10,20));



let combineFunction : Function;
//combineFunction = function(){}
combineFunction = add;
console.log(combineFunction(10,20));
