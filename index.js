//import express
const express = require('express');
const app = express();
//port number
const PORT = 9000;
//database connection to server
const DB = require("./config/mongoose")
//routes are added
const routes = require("./route/route")

app.use(express.urlencoded());
app.use(express.json());
app.use("/",routes);

//start server with port 
app.listen(PORT,(err)=>{
    if(err){
        return ("Error while Connecting Port:",PORT);
    }
    console.log("Server Connected to Port:",PORT);
})