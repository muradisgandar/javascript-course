// Common Js modules

// module.exports.test1 = function test1(){

//     console.log("Test 1");
// }

// module.exports.test2 = function test2(){

//     console.log("Test 2");
// }

// module.exports = {
//     name: "Murad",
//     test1 : function(){
//         console.log("Test 1");
//     },
//     person:{
//         name: "Murad",
//         mail : "murad.isgandar@gmail.com"
//     }
// }


// ES 6 modules , new syntax ,new style

export const name = "Murad";
export function test(){
    console.log("test function");
}

export class Person{
    static Test(){
        console.log("Peron test");
    }
}

export const employee = {
    name: "Murad",
    salary : 4000
}

// export default class Testing{
//     static test(){
//         console.log("Testing purpose");
//     }
// }

const defaultVal = "Default value";

export default defaultVal;

// IMPORTANT : deafult export her module da yalniz bir dene ola biler!