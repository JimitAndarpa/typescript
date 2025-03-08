// when we want to keep 2 or multiple option that time we will use union. using pipe symb
// function combine(num1 : number | string, num2 : number | string){
//     let result;
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         return num1 + num2;
//     }else{
//         result = num1.toString() + num2.toString()
//     }
//     return result
// }
// const sum = combine(10,20)
// const combined = combine("patel", "merstack")
// console.log(sum, combined)
// Literal types
function combine1(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        return +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine1(10, 20, "as-number");
console.log(sum1);
