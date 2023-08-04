//import mongoose
const mongoose = require('mongoose');
//url for connect mongodb 
const mongo = "mongodb+srv://neerajkumar9966724:1234@cluster0.lgmivzx.mongodb.net/?retryWrites=true&w=majority";
//connection
mongoose
    .connect(mongo)
    .then(()=>console.log("DB Connected Succesfully"))
    .catch((err)=>console.log("Error while Connecting DB",err));