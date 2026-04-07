import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const app = express();
app.use(express.json());
const SECRET = "secret123";

const dbUsers = [];

app.post("/register", async(req,res)=>{
    const hashed = await bcrypt.hash(req.body.password,10);
    dbUsers.push({email: req.body.email, password: hashed});
    res.json({message: "User registered",dbUsers});
})

app.post("/login", async(req,res)=>{
    const user = await dbUsers.find(u=>u.email===req.body.email);
    if(!user) return res.status(400).send("User not found");
    const valid = await bcrypt.compare(req.body.password,user.password);
    if(!valid) return res.status(400).send("Invalid password");
    const token = jwt.sign({email:user.email},SECRET);
    res.json(token);
})

function auth(req,res,next){
    const header = req.headers.authorization;
    if(!header) return res.status(401).send("Access denied");
    const token = header.split(" ")[1];
    if(!token) return res.status(401).send("Access denied");
    try {
        const verified = jwt.verify(token,SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
}

app.get("/profile", auth,(req,res)=>{
    const user = req.user;
    console.log("user",user)
    res.status(200).json({message: "Protected route", user})
})

app.listen(5000,()=>{
    console.log(`App is running at 5000`);
})