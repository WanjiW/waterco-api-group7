import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from "cors";

const app = express();  // now we have an express app

dotenv.config()

const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
    res.send("Hello World")  // response sent to browser
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(router);
app.use(cors());


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