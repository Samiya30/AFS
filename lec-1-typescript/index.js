function isAllowedToVote(age){
    if(age<18){
        return false;
    }
    else{
        return true;
    }
}
let result=isAllowedToVote();
console.log(result);


let user={
    name:"Samiya"
}
console.log(isAllowedToVote(user.age));