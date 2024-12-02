import User from "../models/userModel.js";

//get all users
export const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message: err.message});
    }
}

//add user 
export const addUser = async (req, res) => {
    try{
        const {id, name , email, age} = req.body;
        const newUser = new User({id, name , email, age});
        await newUser.save();
        res.status(200).json(newUser);
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
