            // Dynamic Element Deleting


const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

            //Remove metodu

// todos[0].remove();

            // Remove Child metodu

// todoList.removeChild(todoList.lastElementChild);

// they are the same

todoList.removeChild(todos[3]);

console.log(todos);
console.log(todoList);
