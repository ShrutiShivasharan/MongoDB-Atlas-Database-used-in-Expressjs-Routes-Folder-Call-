import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    category: { type: String, require: true },
    price: { type: Number, require: true }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;