const express = require("express");
const { accessControl, defaultMiddleware } = require("./middleware");

const users = [
    { id: 1, name: "Murad Isgandarli", place: "Ankara" },
    { id: 2, name: "Aga Agayev", place: "Baku" }
];

const app = express();

const PORT = 5000;
app.use(express.json()); // req.body edib gelen datani serverde tutmaq uchun express.json() middleware app levelde istifade olunmaidir
// app.use(accessControl); // butun route(url) lardan evvel ishleyecek
// Get request
// localhost:5000/users

// eger 1 den chox middleware varsa onu array de yazmaq olar, yada ki adi vergulenen ayirmaq olar
app.get("/users", [accessControl, defaultMiddleware], (req, res, next) => { // eger middleware ni xususi route da istifade etmek isteyirikse onda bu formada yazilir metoda bax
    res.json(users);
});

app.get("/products", (req, res, next) => {
    res.json({
        success: true,
        data: users
    });
});

app.post("/users", (req, res, next) => {

    users.push(req.body);
    res.json({
        success: true,
        data: users
    });
});

//users/1
app.put("/users/:id", (req, res, next) => {

    const id = parseInt(req.params.id);
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i] = {
                ...users[i],
                ...req.body
            };

        }
    }

    res.json({
        success: true,
        data: users
    });
});

app.delete("/users/:id", (req, res, next) => {

    const id = parseInt(req.params.id);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i,1);

        }
    }
    res.json({
        success: true,
        data: users
    });
});

app.listen(PORT, () => {
    console.log("Server started PORT : " + PORT);
});

