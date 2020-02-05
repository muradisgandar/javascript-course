let value;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");
const cardrow = document.querySelector(".card.row");

value = todoList;
value = todo;
value = cardrow;

//Child Nodes - Aradaki 14 ve 15 arasi txt olaraq qebul edir ve elementin sayindan chox chirardir 
/*
<li>
</li>
<li>
</li>
*/
value = todoList.childNodes;

//Children -  Elementi chixardir ancaq
value = todoList.children;
value = todoList.children[todoList.children.length-1];
value = todoList.children[0].textContent = "Changed";


value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "Changed also";


value = todoList;
value = todoList.children[0];    //value = todoList.firstElementChild; they are the same
value = todoList.firstElementChild; 
value = todoList.lastElementChild;  // last child
value = todoList.children.length; //value = todoList.childElementCount; they are the same



// Parent
value = cardrow;
value = cardrow.parentElement; // returns container div
value = cardrow.parentElement.parentElement;   //returns body


// Brother elements from one parent

value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;


console.log(value);