import express from "express"
import router from "./routes/index.js";
import bodyparser from "body-parser";
import dotenv from "dotenv";
const App=express();

dotenv.config();
const port=process.env.PORT||3000
App.use(express.json());
App.use(express.urlencoded({extended:false}));


App.use(router)


 

App.listen(port,()=>{
    console.log(`App is running on ${port}`)
})