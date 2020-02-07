// Local storage

// Set item
// localStorage.setItem("hereket","asdfgh");
// localStorage.setItem("hereket2","asdgrgrfgh");

//Get Item
// const value = localStorage.getItem("hereket");

// Clear storage

// localStorage.clear();

// Local storeage a array yazma

const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos",JSON.stringify(todos));

// Get etmek
// const value = JSON.parse(localStorage.getItem("todos"));
// console.log(value);


const form = document.getElementById("todo-form");
const todoinput = document.getElementById("todo");


form.addEventListener("submit",addTodo);

function addTodo(e){
    const value = todoinput.value;

    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos));
    e.preventDefault();
}























