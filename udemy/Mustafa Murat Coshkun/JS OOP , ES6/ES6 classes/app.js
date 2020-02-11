           // In before ES6

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("Name: "+this.name+"Age: "+this.age+"Salary: "+this.salary);
// }
// const emp = new Employee("Murad",19,3000);
// console.log(emp);


           // In ES 6

class Employee{

    constructor(name,age,salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){
        console.log("Name: "+this.name+"Age: "+this.age+"Salary: "+this.salary);
    }

}

const emp = new Employee("Murad",19,2000);
// console.log(emp);
emp.showInfos();