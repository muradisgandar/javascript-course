// console.log(this);   // burada this Window objectine refer olur

// const emp1 = { // Object Literal
//     name : "Murad",
//     age : 19,
//     showInfos : function(){
//         console.log("Show details");
//     } 
// };

// const emp2 = {
//     name : "Cafar",
//     age : 30
// };

// emp1.salary = 3000;
// emp1.showInfos();
// console.log(emp1);

function Employee(name,age,salary){  // Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    // console.log(this);  // refer Employee object
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Murad",19,3000);
const emp2 = new Employee("Aflatun",19,3009);

// console.log(emp1);
// console.log(emp2);

emp1.showInfos();
emp2.showInfos();




