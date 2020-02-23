// async function test(data) {
//     // return new Promise((resolve,reject) => {
//     //     // resolve(data); 
//     // });

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("This is any number")
//         }, 5000);

//     });

//     let response = await promise;  // waiting 5 seconds

//     return response;
// }

// test("Salam").then(response => console.log(response)); 


// async function testData(data) {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof data === "string") {
//                 resolve(data);
//             }
//             else {
//                 reject(new Error("Please input string value"));
//             }
//         }, 5000);

//     });

//     const response = await promise;

//     return response;


// }

// testData(6)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


async function getCurrency(url) {

    const response = await fetch(url); // Response object

    const data = await response.json();


    return data;


}

getCurrency("https://api.exchangeratesapi.io/latest")
    .then(response => console.log(response));
