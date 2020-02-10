// let a = "Murad";
// let b = "Murad";

// if(a === b){
//     console.log("Equal");
// }

// let array1 = [1,2,3,4,5];
// let array2 = [1,2,3,4,5];

// if(array1 === array2){
//     console.log("Equal");
// }
// else{
//     console.log("Not Equal");
// }

const cities = new Map();
const key = [1,2,3];

cities.set("Baku",2);
cities.set("Ankara",5);
cities.set("Istanbul",6);
// cities.set([1,2,3],"Array");
cities.set(key,"Array");



// console.log(cities.get([1,2,3]));  // returns undefined , because new array is generated and it's reference is different from other
console.log(cities.get(key));










