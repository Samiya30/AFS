"use strict";
//primitive : Number,boolean,string,undefined,null
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 10;
//a="hello"
console.log(a);
function isAllowedToVote(age) {
    if (age < 18) {
        return false;
    }
    else {
        return true;
    }
}
let result = isAllowedToVote(24);
//function return type
function print() {
    console.log("hello world");
    //return true
}
print();
//# sourceMappingURL=script.js.map