"use strict";
//union type
Object.defineProperty(exports, "__esModule", { value: true });
let a;
a = 10;
a = "18";
let emp1 = {
    name: "Samiya",
    empId: "ABC_2026_cb",
    age: 20,
    dept: "CSE",
    salary: 12345,
    phone: 789456123,
    projectId: 123456,
    projectName: "asdfhrdfa",
    isActive: true
};
let emp2 = {
    name: "Samiya",
    empId: "ABC_2026_cb",
    age: 20,
    dept: "CSE",
    salary: 12345,
    phone: 789456123,
    projectId: 123456,
    projectName: "asdfhrdfa",
    isActive: true
};
//can i create union or intersection type using interface can be done using type but not interface
// interface EmpOrteam = Employee | TeamLead;
//2. interface can be expanded but not type
// interface Employee{
//     bloodGroup:String
// }
console.log(emp1.age);
let emp3 = {
    name: "Samiya",
    empId: "assdfg",
    age: 20,
    dept: "CSE",
    salary: 123456,
    phone: 123456789,
    // bloodGroup:"AB+"
};
//# sourceMappingURL=index.js.map