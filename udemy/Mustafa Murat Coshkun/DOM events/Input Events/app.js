const filter = document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Content loaded");
// }

// // Focus
// filter.addEventListener("focus",run);
// // Blur 
// filter.addEventListener("blur",run);

// Paste   / neyise copyalayib paste edende ishe dushur
// filter.addEventListener("paste",run);

// //Copy
// filter.addEventListener("copy",run);

// //Cut
// filter.addEventListener("cut",run);

// Select
filter.addEventListener("select",run); // input boxda yazini select edende ishe dushur


function run(e){
    console.log(e.type);
}
