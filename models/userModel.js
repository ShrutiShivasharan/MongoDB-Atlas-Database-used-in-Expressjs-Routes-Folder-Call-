import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: Number, require: true },
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    age: { type: Number, require: true }
});

const User = mongoose.model('User', userSchema);

export default User;