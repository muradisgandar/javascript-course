// Sets

const mySet = new Set();

mySet.add(100);
mySet.add(100);
mySet.add(3.14);
mySet.add("Murad");
mySet.add([1,2,3]);
mySet.add({a:1,b:2});

const mySet2 = new Set([100,3.14,"Mustafa"]);  // Creating array from set

// console.log(mySet);
// console.log(mySet2);

// Size
// console.log(mySet.size);

// Delete
// mySet.delete("Murad");
// console.log(mySet);


// Has method

// console.log(mySet.has("Murad"));
// console.log(mySet.has([1,2,3]));  // returns false because new array is generated and it's referance is different from another

// For Each

// mySet.forEach(function(value){
//     console.log(value);

// });

// For of

// for(let value of mySet){
//     console.log(value);
// }

// Creating array from set
const array = Array.from(mySet);
console.log(array);







