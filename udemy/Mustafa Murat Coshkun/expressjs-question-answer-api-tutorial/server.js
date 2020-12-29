const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers");
const connectDatabase = require('./helper/database/connectDatabase');
const customErrorHandler = require("./middlewares/errors/customErrorHandler");

// Enviroment variables
dotenv.config({
    path : "./config/env/config.env"
});

// MongoDB connection
connectDatabase();

const app = express();

//Express body middleware
app.use(express.json());

const PORT = process.env.PORT;

// Routers Middleware

app.use("/api",routers);

// Error Handling

app.use(customErrorHandler);


app.listen(PORT,() => {
    console.log(`App started on ${PORT} : ${process.env.NODE_ENV}`);
});



