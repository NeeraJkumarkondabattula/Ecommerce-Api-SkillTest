//import mongoose
const mongoose = require("mongoose");
//import schema from mongoose
const {Schema} = require("mongoose");
//create schema
const itemSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    }
})

const Item = mongoose.model("Item",itemSchema);
//export schema
module.exports = Item;