
document.getElementById("btn").addEventListener("click", function () {
    // XMLHttpRequest

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "example.txt", true);


    // xhr.onreadystatechange = function(){

    //     if(this.status == 200 && this.readyState == 4){

    //         console.log(xhr.responseText);
    //     }
    // }

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById("ajax").textContent = this.responseText;
        }

    }


    xhr.send();
});