import Product from "../models/productModel.js";

//get all Products
export const getProducts = async (req, res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//add Product 
export const addProduct = async (req, res) => {
    try{
        const {id, name , category, price} = req.body;
        const newProduct = new Product({id, name , category, price});
        await newProduct.save();
        res.status(200).json(newProduct);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
