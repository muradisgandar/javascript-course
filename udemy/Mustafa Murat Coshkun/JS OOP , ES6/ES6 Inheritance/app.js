class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("Name: " + this.name + " Age: " + this.age);
    }
}

class Employee extends Person{
    constructor(name,age,salary){
        // this.name = name;
        // this.age = age;
        super(name,age);
        this.salary = salary;
    }
    showInfos(){
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: "+ this.salary);
    }

    toString(){
        console.log("Employee");
    }

    raiseSalary(amount){
        this.salary += amount;
    }
}

const emp = new Employee("Murad",19,20000);
// console.log(emp);

emp.raiseSalary(500);
emp.showInfos();

