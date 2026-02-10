//type narrowing

function upperCase(arg:number|string){
    if(typeof(arg)=="string"){
        return arg.toUpperCase();
    }
    else{
        return arg;
    }
}
upperCase("abbb");


//example 1
interface User{
    name:string,
    age:number,
    phone?:number   
}
let u1:User={
    name:"Samiya",
    age:20,
    //phone:123456789
}
function getPhone(arg:User):number{
    if("phone" in arg){
        return arg.phone;
    }
    else{
        return 0;
    }
}
let result:number=getPhone(u1);

//example 2
interface Person{
    role:string,
    permission?:string[]
}
let user:Person={
    role:"user"
}
let admin:Person={
    role:"admin",
    permission:["write","delete","update"]
}
function writeBlog(user:Person){
    if("permission" in user){
        let permission=user.permission;
        if(permission.includes("write")){
            //do your task
            return "blog is written"
        }
    }
    return "not authorized"
}
writeBlog({role:"user"})

//example 3
//type move="up"|"down"|"left"|"right"
type success={
    status:"200",
    data:[]
}
type error={
    status:"404",
    message:""
}
type ApiResponse= success|error;
function sendResponse(response:ApiResponse){
   if(response.status=="200"){
    return response.data
   }
   return response.message;
}
