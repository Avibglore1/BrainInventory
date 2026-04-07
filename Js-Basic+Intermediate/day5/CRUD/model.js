import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true, index: true},
    age: Number,
},{timestamps: true})

userSchema.index({email: 1});

export default mongoose.model("User", userSchema);