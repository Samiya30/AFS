//enum----> set of constant values

//1. type
type Role="admin"|"user"
function addblog(role:Role):string{
    if(role=="user"){
        return "not authorize"
    }
    //blog add
    return "blog added"
}
let message=addblog("admin");
let message2=addblog("user");
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
enum Role2{
    user="user",
    admin="admin"
}
console.log(Role2.user)  //0
console.log(Role2.admin)    //1

function addblog2(role:Role2):string{
    if(role=="user"){
        return "not authorize"
    }
    //blog add
    return "blog added"
}
addblog2(Role2.user);
addblog2(Role2.admin);

//type--->any
let a:any;  //treat like javascript(can used for any value but not safe)
a:"fgdfgh";
a:10;

let b;//give any type implicitly if nothing given manually