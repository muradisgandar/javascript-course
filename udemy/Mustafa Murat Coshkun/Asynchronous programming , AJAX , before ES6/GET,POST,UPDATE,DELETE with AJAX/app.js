// Ajax,callback , http requests

class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();
    }

    // Get request
    get(url,callback){

        this.xhr.open("GET",url);
        

        // this.xhr.onload = function(){
        //     if(this.xhr.status === 200){
        //         console.log(this.xhr.responseText);
        //     }

        // }.bind(this);  // bind(this) burada funcsiyanin ichinde request objecti gosterir chunki get metodu
        // // ozu request obyektine aiddir


        // bind evezine arrow function da istifade etmek olar
        this.xhr.onload = () =>{
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                // Error
                callback("Error",null);
            }

        };


        this.xhr.send();
    }
}
const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
//     if(err === null){
//         //Successfully
//         console.log(response);
//     }
//     else{
//         // Fail
//         console.log(err);
//     }
    
// });

request.get("https://jsonplaceholder.typicode.com/albums/51",function(err,response){
    if(err === null){
        //Successfully
        console.log(response);
    }
    else{
        // Fail
        console.log(err);
    }
    
});
