"use strict";
//enum----> set of constant values
Object.defineProperty(exports, "__esModule", { value: true });
function addblog(role) {
    if (role == "user") {
        return "not authorize";
    }
    //blog add
    return "blog added";
}
let message = addblog("admin");
let message2 = addblog("user");
//addblog("dassf") //error
//2. enum
// enum Role2{
//     user,
//     admin
// }
// enum Role2{
//     user=1,
//     admin=20
// }
var Role2;
(function (Role2) {
    Role2["user"] = "user";
    Role2["admin"] = "admin";
})(Role2 || (Role2 = {}));
console.log(Role2.user); //0
console.log(Role2.admin); //1
function addblog2(role) {
    if (role == "user") {
        return "not authorize";
    }
    //blog add
    return "blog added";
}
addblog2(Role2.user);
addblog2(Role2.admin);
//# sourceMappingURL=index.js.map