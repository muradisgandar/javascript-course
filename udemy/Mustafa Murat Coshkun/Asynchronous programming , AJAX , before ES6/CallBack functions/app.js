// CallBack

// const langs = ["Python","Java","C++"];

// langs.forEach(function(lang){
//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click",function(){
//     console.log("Click");
// });

function process1(){
    setTimeout(function(){
        console.log("Process 1");
    },3000);
    
}
function process2(){
    setTimeout(function(){
        console.log("Process 2");
    },2000);
}

process1();
process2();