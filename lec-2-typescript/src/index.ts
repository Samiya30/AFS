//union type

// let a=10;
// a="18"   //to give bothnumber and string use union type
type numberorstring=number | string;
let a:numberorstring;
a=10;
a="18";


interface Employee{
    name:string,
    empId:string,
    age:number,
    dept:string,
    salary:number,
    phone:number
}

interface TeamLead{
    name:string,
    empId:string,
    salary:number,
    age:number,
    dept:string,
    projectId:number
    projectName:string,
    isActive:boolean
}

//union of emp and teamlead
//should contain either of all properties and both also
type EmpOrteam=Employee | TeamLead;
let emp1:EmpOrteam={
    name:"Samiya",
    empId:"ABC_2026_cb",
    age:20,
    dept:"CSE",
    salary:12345,
    phone:789456123,
    projectId:123456,
    projectName:"asdfhrdfa",
    isActive:true
}

//intersection type----> &
type EmpAndTeam=Employee & TeamLead;
let emp2:EmpAndTeam={
    name:"Samiya",
    empId:"ABC_2026_cb",
    age:20,
    dept:"CSE",
    salary:12345,
    phone:789456123,
    projectId:123456,
    projectName:"asdfhrdfa",
    isActive:true
}

//can i create union or intersection type using interface can be done using type but not interface
// interface EmpOrteam = Employee | TeamLead;

//2. interface can be expanded but not type
// interface Employee{
//     bloodGroup:String
// }

console.log(emp1.age);

let emp3:Employee={
    name:"Samiya",
    empId:"assdfg",
    age:20,
    dept:"CSE",
    salary:123456,
    phone:123456789,
    // bloodGroup:"AB+"
}

//3. interface can be implemented in class but not type