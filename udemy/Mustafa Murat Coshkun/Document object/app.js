var value;

value = document;
value = document.all; // returns HTMLCollection
value = document.all.length;
value = document.all[0];
value = document.all[6];
value = document.all[document.all.length-1];


// const elements = document.all;   //HTML collection
// for(let i = 0;i<elements.length;i++){
//     console.log(elements[i]);
// }

// elements.forEach(function(element){   // it cant work and throws TypeError
//     console.log(element);
// });

//that s why we must cast collection to array for using for each:

// const collections = Array.from(document.all);

// collections.forEach(function(collection){
//     console.log(collection);
// });


value = document.body;
value = document.all[8];  //it returns also body
value = document.head;  // it returns head
value = document.location;
value = document.location.hostname;

value = document.URL;
value = document.characterSet; // returns UTF-8 or another set which is defined in html

console.log(value);


