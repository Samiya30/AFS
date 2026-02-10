//create a function which accepts one parameter---->either number array or string array
type numOrStr=number|string;
function FirstValue(arg:numOrStr[]){
    return arg[0];
}
let val=FirstValue(["A","BBB","C"]);
//val.toLowerCase();  //not valid for number so it gives error

//using generics---->to preserve tyoe
function FirstValue2<T>(arg:T[]){
    return arg[0];
}
let val2=FirstValue2<string>(["A","BBB","C"]);
val2?.toLowerCase();    //here ? is used because val2 can be string but also undefined
let val3=FirstValue2<number>([1,2,3]);
val3?.toString();

//what does ? mean
interface User{
    name:string,
    age:number,
    phone?:number   //to make optional---> ? is used
}

let u1:User={
    name:"Samiya",
    age:20,
    //phone:123456789
}
console.log(u1.phone);