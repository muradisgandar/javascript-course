// Element choosing for id

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element choosing for class

element = document.getElementsByClassName("list-group-item")[0]; //returns collection and we can choose element for index
element = document.getElementsByClassName("card-header");

// Element choosing for tagname

element = document.getElementsByTagName("li"); //returns collection

// Query selector - only one element
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");

element = document.querySelector("li");

//QuerySelectorAll for all elements
element = document.querySelectorAll(".list-group-item")  //nodelist qaytarir ve icinde butun uygun elementler

element.forEach(function(el){
    console.log(el);
});

console.log(element);
