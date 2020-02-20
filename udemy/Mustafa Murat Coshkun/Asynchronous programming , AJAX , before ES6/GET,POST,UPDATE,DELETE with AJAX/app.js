// Ajax,callback , http requests

class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // Get request
    get(url, callback) {


        this.xhr.open("GET", url);


        // this.xhr.onload = function(){
        //     if(this.xhr.status === 200){
        //         console.log(this.xhr.responseText);
        //     }

        // }.bind(this);  // bind(this) burada funcsiyanin ichinde request objecti gosterir chunki get metodu
        // // ozu request obyektine aiddir


        // bind evezine arrow function da istifade etmek olar
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, this.xhr.responseText);
            }
            else {
                // Error
                callback("Error", null);
            }

        };


        this.xhr.send();
    }

    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json");


        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                // Successfully
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Error...", null);
            }
        }


        this.xhr.send(JSON.stringify(data));

    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json");


        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                // Successfully
                callback(null, this.xhr.responseText);
            }
            else {
                callback("Error...", null);
            }
        }


        this.xhr.send(JSON.stringify(data));

    }

    delete(url, callback) {


        this.xhr.open("DELETE", url);

        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                callback(null, "Successfully deleted");
            }
            else {
                // Error
                callback("Error", null);
            }

        };


        this.xhr.send();
    }

}
const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         //Successfully
//         console.log(response);    // it is string form
//         // console.log(JSON.parse(response));  // it is JSON form

//     }
//     else{
//         // Fail
//         console.log(err);
//     }

// });

// request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
//     if(err === null){
//         //Successfully
//         console.log(response);
//     }
//     else{
//         // Fail
//         console.log(err);
//     }

// });

// request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,album){

//     if(err === null){
//         console.log(album);
//     }
//     else{
//         // Error
//         console.log(err);

//     }
// });

// request.put("https://jsonplaceholder.typicode.com/albums/10", { userId: 143, title: "Makar10" }, function (err, album) {

//     if (err === null) {
//         console.log(album);
//     }
//     else {
//         // Error
//         console.log(err);

//     }
// });

request.delete("https://jsonplaceholder.typicode.com/albums/10", function (err, response) {
    if (err === null) {
        //Successfully
        console.log(response);
    }
    else {
        // Fail
        console.log(err);
    }

});




