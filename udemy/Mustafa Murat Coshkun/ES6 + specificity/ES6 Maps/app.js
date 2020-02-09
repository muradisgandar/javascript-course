// Maps - Key - Value

// let myMap = new Map(); // Map declaring

// const key1 = "Murad";
// const key2 = {a:10,b:20};
// const key3 = () => 2;

// // Set
// myMap.set(key1,"String");
// myMap.set(key2,"Object");
// myMap.set(key3,"Function");

// Get
// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);


// Map's size

// console.log(myMap.size);

// const cities = new Map();

// cities.set("Ankara",5);
// cities.set("Baku",2);
// cities.set("Istanbul",15);

// For each

// cities.forEach(function(value,key){
//     console.log(key,value);
// });

// For of

// for(let [key,value] of cities){  // Destructing
//     console.log(key,value);
// }

// Map Keys

// for(let key of cities.keys()){
//     console.log(key);
// }

// Map Values

// for(let value of cities.values()){
//     console.log(value);
// }

// Arraydan map yaratmaq
// const array = [["key1","value1"],["key2","value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

// mapdan array yaratmaq

const cities = new Map();

cities.set("Ankara",5);
cities.set("Baku",2);
cities.set("Istanbul",15);


const array = Array.from(cities);
// [["Ankara",5],["Baku",2],["Istanbul",15]]
console.log(array);
