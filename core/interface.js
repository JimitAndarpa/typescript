var user;
//we can use Type here
// type person = {
//     name : string;
//     age: number;
//     greet(text: string) : void
// }
user = {
    name: 'John',
    age: 22,
    greet: function (text) {
        console.log("".concat(text, " ").concat(this.name));
    },
};
console.log(user);
user.greet("Hellloooo user..");
var person1 = /** @class */ (function () {
    function person1(n) {
        this.name = n;
    }
    person1.prototype.greet = function (text) {
        console.log("".concat(text, ", ").concat(this.name));
    };
    return person1;
}());
var p1 = new person1("SAM");
p1.greet("Hello user..");
