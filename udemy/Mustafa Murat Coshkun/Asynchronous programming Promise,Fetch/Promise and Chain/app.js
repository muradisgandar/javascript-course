// function getData(data) {   // returning promise object
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             // resolve("Success");
//             // reject("Failed");

//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Please,enter any string"));
//             }

//         }, 5000);
//     });
// }


// // console.log(getData("Hello"));


// // getData("Hello").then(function(response){   // for resolve or fullfilled situation, we take value response
// //     console.log(response);
// // });

// // getData("Hello").catch(function(err){   // for reject or fullfilled situation, we take value response
// //     console.log(err);
// // });

// getData(23)
//     .then(response => console.log("Response " + response))
//     .catch(err => console.error(err));


function addTwo(number) {

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number === "number") {
                resolve(number + 2);
            }
            else {
                reject(new Error("Please enter any number"));
            }
        }, 3000);
    });
}

addTwo("Hello")
    .then(response => {
        console.log(response);
        return response + 2;
    }).then(response2 => console.log(response2))
    .catch(err => console.error(err));


// 1 catch , 1 den chox then istifade etmek olar - Promise chain
    