import mongoose from "mongoose";

const connectDB = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/day5");
        console.log("Mongodb connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB