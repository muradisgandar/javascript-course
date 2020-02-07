// Keyboard events



// keypress
// document.addEventListener("keypress",run);

// function run(e){
//     // console.log(e.which); // returns ascii number of characters
//     console.log(e.key);  // returns which chacarter is pressed
//     // console.log("Hello");
// }


// keydown
// document.addEventListener("keydown",run);  // Keyboard functional keys(capslock,control and others) are included here

// function run(e){
//     // console.log(e.which); // returns ascii number of characters
//     console.log(e.key);  // returns which chacarter is pressed
    
// }


// keyup ,  when we release any key this event will be called
// document.addEventListener("keyup",run);

// function run(e){
//     // console.log(e.which); // returns ascii number of characters
//     console.log(e.key);  // returns which chacarter is pressed
    
// }

// Exercise
const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value);  // return input box text in which keyup event is invoked
}


