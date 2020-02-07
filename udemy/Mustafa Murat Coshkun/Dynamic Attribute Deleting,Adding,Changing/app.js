const todoInput = document.getElementById("todo");
let element;


element = todoInput;
element = todoInput.classList.length;

// todoInput.classList.add("newClass");  //adding new Class
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control"); // removing class

element = todoInput;
// element = todoInput.placeholder;
 //they are the same
element = todoInput.getAttribute("placeholder");
// element = todoInput.placeholder = "Hello";
 //they are the same
todoInput.setAttribute("placeholder","Hello");
todoInput.setAttribute("title","Input");
todoInput.removeAttribute("name");

element = todoInput;
// element = todoInput.hasAttribute("required");  //checks if this attribute has ot not



console.log(element);