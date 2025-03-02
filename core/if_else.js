var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["CLIENT"] = 2] = "CLIENT";
})(Role || (Role = {}));
var person1 = {
    name: "jimit",
    age: 24,
    skills: ["react", "node"],
    role: "Author"
};
if (person1.role === "Author") {
    console.log("author");
}
else if (person1.role === "User") {
    console.log("user");
}
