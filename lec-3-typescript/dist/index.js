"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FirstValue(arg) {
    return arg[0];
}
let val = FirstValue(["A", "BBB", "C"]);
//val.toLowerCase();  //not valid for number so it gives error
//using generics---->to preserve tyoe
function FirstValue2(arg) {
    return arg[0];
}
let val2 = FirstValue2(["A", "BBB", "C"]);
val2?.toLowerCase(); //here ? is used because val2 can be string but also undefined
let val3 = FirstValue2([1, 2, 3]);
val3?.toString();
let u1 = {
    name: "Samiya",
    age: 20,
    //phone:123456789
};
console.log(u1.phone);
//# sourceMappingURL=index.js.map