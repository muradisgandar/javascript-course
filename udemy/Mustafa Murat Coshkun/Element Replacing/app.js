// Element Replacing

const cardbody = document.querySelectorAll(".card-body")[1];

const newElement = document.createElement("h3");

newElement.className = "card-title";
newElement.id = "tasks-title";
newElement.textContent = "New Todos";

// Old Element

const old = document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,old);


// console.log(cardbody);


