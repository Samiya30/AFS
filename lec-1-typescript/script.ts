//primitive : Number,boolean,string,undefined,null

let a:number;
a=10;
//a="hello"
console.log(a);

function isAllowedToVote(age:number):boolean{
    if(age<18){
        return false;
    }
    else{
        return true;
    }
}
let result:boolean=isAllowedToVote(24);

//function return type
function print():void{
    console.log("hello world")
    //return true
}

print()