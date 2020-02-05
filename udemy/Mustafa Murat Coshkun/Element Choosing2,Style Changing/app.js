const element = document.querySelector("#clear-todos");
//they are the same

// const element = document.getElementById("clear-todos");

//Element properties:

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[0]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


// Changing style and element properties

// element.className = "btn btn-primary";
// element.style.color = "#000";
// element.href = "https://google.com";
// element.target = "_blank";
// element.textContent = "Silin";
// element.innerHTML = "<span style = 'color:green'>Silin</span>";


// const elements = document.querySelectorAll(".list-group-item");
// elements.forEach(function(el){
//     el.style.color = "red";
//     el.style.background = "#eee";

// });

let element2 = document.querySelector("li:first-child");  // returns first li element
element2 = document.querySelector("li:last-child");  //returns last li element
element2 = document.querySelector("li:nth-child(2)"); //returns 2 th li element
element2 = document.querySelector("li:nth-child(3)"); //returns 3 th li element
element2 = document.querySelectorAll("li:nth-child(odd)"); // returns odd number elements 1,3,5 and so on
element2 = document.querySelectorAll("li:nth-child(even)"); // returns odd number elements 2,4,6 and so on

element2.forEach(function(el){
    el.style.background = "#ccc";
    el.style.color = "red";
});

console.log(element2);


// console.log(element);