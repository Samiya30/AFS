"use strict";
//how to give type to object
// let user={
//     name:"Samiya",
//     age:24,
//     city:"delhi"
// }
Object.defineProperty(exports, "__esModule", { value: true });
//1. using object literal
let user = {
    name: "Samiya",
    age: 20,
    city: "delhi"
};
let p1 = {
    name: "abcd",
    age: 20
};
//array type
// let numArr:number[]=[1,"23",true]
let numArr = [1, 23, 0];
let allUsers = [{ name: "samiya", age: 20 }, { name: "sam", age: 20 }, { name: "sami", age: 20 }];
function printAllUserName(users) {
    users.forEach((user) => {
        console.log(user.name);
    });
}
printAllUserName(allUsers);
//# sourceMappingURL=index.js.map