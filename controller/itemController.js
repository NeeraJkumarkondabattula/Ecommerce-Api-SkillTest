const Item = require("../model/itemModel");

module.exports.home = (req,res) =>{
    console.log(res.send("Home Page"));
}

//adding products 
module.exports.createItem = async (req,res) =>{
    try{
        const {name,quantity} = req.body;
        console.log("req",req.body);

        if(!name || !quantity){
            return res.status(201).json({
                messsage:"Please Fill All Required Fields!!",
                data:{}
            });
        }
        const createItem = await Item.create({
            name,
            quantity,
        });
        // console.log(res.send(data));
        return res.status(201).json({
            message: "Record Created Successfully",
            products:[createItem],
        })
    }catch(err){
        if(err.code===11000){
            return res.status(400).json({
                message: "Please Provide Unique Student ID",
                products: {}
            });
        }
        return res.status(500).json({
            message: "Something went wrong while Creating record",
            products: {}
        });
    }
}

//get all products
module.exports.products = async (req,res) =>{
    try{
        const data = await Item.find({})
        
        return res.status(200).json({
            message: "Fetched all records",
            products: data
        })
    }catch(err){
        return res.status(500).json({
            message: "Something went wrong fetching all records",
            data: {}
        })
    }
}

//delete product by ID
module.exports.deleteItem = async (req,res) =>{
    try{
        const {id} = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if(!deletedItem){
            return res.status(404).json({
                message: "No record found with given ID",
                data:{}
            })
        }
        return res.status(200).json({
            message: "Record deleted Successfully",
            data :deletedItem
        })
    }catch(err){
        return res.status(500).json({
            message: "Something went wrong while Deleting record",
            data: {}
        });
    }
}

//update product quantity by ID
module.exports.updateItem = async (req,res) =>{
    try{
        const {id} = req.params;
        const {quantity} = req.body;
        if(!quantity){
            return res.status(400).json({
                message: "Please send all the required fields",
                data: {}
            })
        }
        const updateItem = await Item.findByIdAndUpdate(
            id,
            {
               quantity
            },{
                new : true
            }
        )
        if(!updateItem){
            return res.status(404).json({
                message: "No record found with the given ID",
                data: {}
            })        
        }
        return res.status(200).json({
            message: "Record updated successfully",
            data: updateItem
        })
    }catch{
        return res.status(500).json({
            message: "Something went wrong while creating record",
            data: {}
        })
    }
}