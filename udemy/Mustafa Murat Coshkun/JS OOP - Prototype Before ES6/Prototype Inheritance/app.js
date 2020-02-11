// Inheritance

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age);
}
// const person = new Person("Murad",19);
// console.log(person);

function Employee(name,age,salary){
    
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);   // bu anlayish javada olan super() ile eynidir orada parentin konstruktounu chagirmaq uchun child in konstructorunda super() yaziriq
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}
// Overriding
Employee.prototype.showInfos = function(){
    console.log("Name: " + this.name + " Age: " + this.age + " Salary: "+ this.salary);
}
const emp = new Employee("Murad",19,2000);
// console.log(emp);
emp.showInfos();
// emp.toString();

// console.log(emp);











