// Event Bubbling

document.querySelector(".container").addEventListener("click",function(){
    console.log("Div container");
});

document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card body");
});

