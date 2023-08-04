const express = require("express");
const router = express.Router();

const itemController = require("../controller/itemController");

//home page route
router.get("/",itemController.home);
//products adding page route
router.post("/products/create",itemController.createItem);
//products page route
router.get("/products",itemController.products);
//products delete by Id page route
router.delete("/products/:id",itemController.deleteItem);
//update product route
router.put("/products/:id",itemController.updateItem);

module.exports = router;