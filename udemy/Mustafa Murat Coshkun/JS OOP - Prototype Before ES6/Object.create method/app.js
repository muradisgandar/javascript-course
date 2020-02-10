// const obj = {
//     test1 : function(){
//         console.log("Test1");
//     },
//     test2 : function(){
//         console.log("Test2");
//     }
// }

// // console.log(obj);

// const emp = Object.create(obj);   // emp's prototype will be obj
// emp.name = "Murad";
// emp.age = 19;
// console.log(emp);
// emp.test1();


function Person(){

}
Person.prototype.test1 = function(){
    console.log("Test 1");
}
Person.prototype.test2 = function(){
    console.log("Test 2");
}    

function Employee(name,age){
    this.name = name;
    this.age = age;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("My Test");
}
const emp = new Employee("Murad",25);
// emp.test1();

console.log(emp);
