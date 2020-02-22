function getData(data) {   // returning promise object
    return new Promise(function (resolve, reject) {
        setTimeout(function(){

            resolve("Success");
            // reject("Failed");

        },5000);
    });
}


// console.log(getData("Hello"));


getData("Hello").then(function(response){   // for resolve or fullfilled situation, we take value response
    console.log(response);
});