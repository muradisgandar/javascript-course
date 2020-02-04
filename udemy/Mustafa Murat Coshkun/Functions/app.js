
function foo(name = "Unknown",age = "Unknown"){


    // if(typeof(name) === "undefined"){
    //     name = "Unknown";
    // }
    // if(typeof(age) === "undefined"){
    //     age = "Unknown";
    // }

    console.log(`Name:${name} Age:${age}`);

}


// foo();

// data will be passed to function and default values will be changed
// foo("Murad",18);


// function square(x){
//     return x*x;
// }

// function cube(x){
//     return x*x*x;
// }

// let a = cube(square(12));

// console.log(a);



// Function Expression
// const hello = function(name){
//     console.log("Hello World "+name);
// }

// hello("Murad");


//Immediately invoked function expression(IIFE)

// (function(name){
//     console.log(`Hello ${name}`);
// })("Murad");





const db = {
    host: "localhost",
    add:function(){
        console.log("Added");
    },
    get:function(){
        console.log("Got");
    },
    update:function(id){
        console.log(`Id: ${id} Updated`);
    },
    update:function(id){
        console.log(`Id: ${id} Deleted`);
    }
}

console.log(db.host);

db.add();










