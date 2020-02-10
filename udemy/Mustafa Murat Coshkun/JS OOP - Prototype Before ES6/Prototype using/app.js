// const object = new Object();
// const object2 = new Object();
// object.name = "Murad";
// console.log(object);


function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype.showInfos = function(){
    console.log("Name: "+this.name + "Age: "+this.age);
}

const emp1 = new Employee("Murad",19);
const emp2 = new Employee("Farid",30);

console.log(emp1);
console.log(emp2);





