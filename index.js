// first, we import express to create the express app

// const express = require("express"); //the other one

import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from "cors";

const app = express();  // now we have an express app

dotenv.config()

const port = process.env.PORT || 3002;

// const port = 7873; // the port our app will run from

// the endpoint is what is loaded when the application opens
// we have tp specify that we have a request and a response
// we also specify our callback, which is what the api does

// app.use(router);
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(router);

app.get("/", (req, res) => {
    res.send("Hello World")  // response sent to browser
})

app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(router);


app.get('/routes/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/payments/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/bills/:id', function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for all origins!' })
})



// telling our app the port to listen to for requests
// key for the port to work
app.listen(port, () => {
    console.log(`Our Book Club API is now available on port ${port}`)
})


// these app.x with requests are the routes our application will use
// we will also create a file to store our environments, to ensure our passwords
// and variables that should be private remain private
// json files stores all the node.js configurations, which help our app run
// our JSON file also stores our dependancies
// it is like a app manifest for npm to run and manage our app


// mysql://b0104743e395dd:3daa396e@us-cdbr-east-03.cleardb.com/heroku_631e426574eca56?reconnect=true