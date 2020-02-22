function getTextFile() {  // get data from text document

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));


}
function getJsonFile() {  // get json from json document  in localhost

    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));


}
function getExternalAPI(){
    fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => console.log(data.rates.TRY))
        .catch(err => console.log(err));
}
// getTextFile();

// getJsonFile();

getExternalAPI();