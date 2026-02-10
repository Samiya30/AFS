"use strict";
//type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
function upperCase(arg) {
    if (typeof (arg) == "string") {
        return arg.toUpperCase();
    }
    else {
        return arg;
    }
}
upperCase("abbb");
let u1 = {
    name: "Samiya",
    age: 20,
    //phone:123456789
};
function getPhone(arg) {
    if ("phone" in arg) {
        return arg.phone;
    }
    else {
        return 0;
    }
}
let result = getPhone(u1);
//# sourceMappingURL=typeNarrowing.js.map