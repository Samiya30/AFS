//how to give type to object
// let user={
//     name:"Samiya",
//     age:24,
//     city:"delhi"
// }

//1. using object literal
let user:{name:string,age:number,city:string}={
    name:"Samiya",
    age:20,
    city:"panchkula"
}

//2.using interface
interface User{
    name:string,
    age:number,
    city:string
}

//3.using type
type Person={
    name:string,
    age:number
}
let p1:Person={
    name:"abcd",
    age:20
}


//array type
// let numArr:number[]=[1,"23",true]
let numArr:number[]=[1,23,0]
let allUsers:Person[]=[{name:"samiya",age:20},{name:"sam",age:20},{name:"sami",age:20}]


function printAllUserName(users:Person[]):void{
    users.forEach((user:Person):void => {
        console.log(user.name);
    });
}
printAllUserName(allUsers)