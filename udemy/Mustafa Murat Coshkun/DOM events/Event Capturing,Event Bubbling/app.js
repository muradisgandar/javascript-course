// Event Bubbling

// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div container");
// });

// document.querySelector(".card.row").addEventListener("click",function(){
//     console.log("Card row");
// });

// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card body");
// });


//Event capturing or delegation

const cardbody = document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",function(e){
    if(e.target.className === "fa fa-remove"){
        console.log("Delete operation");
    }
    if(e.target.id === "filter"){
        console.log("Filtering");
    }
    if(e.target.id === "clear-todos"){
        console.log("All tasks deleted");
    }
    
});


