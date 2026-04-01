import express from "express";
import User from "./model.js";
import connectDB from "./db.js";

const app = express();
app.use(express.json());
connectDB()
app.post("/users", async(req,res)=>{
    const user = await User.create(req.body);
    res.json(user);
});

app.get("/users", async(req,res)=>{
    const users = await User.find();
    res.json(users);
});

app.put("/users/:userId", async(req,res)=>{
    await User.findByIdAndUpdate(req.params.userId,req.body);
    res.json({message: "updated"});
})

app.delete("/users/:id", async(req,res)=>{
    await User.findByIdAndDelete(req.params.id)
})

app.listen(4000,()=>{
    console.log(`Server running at port 4000`)
})