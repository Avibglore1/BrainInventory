import dotenv from "dotenv";
dotenv.config();
import express from "express"
import { pool } from "./db.js";
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})



// app.get("/", async(req,res)=>{
    
// })

app.get("/users", async(req,res)=>{
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows)
})

app.get("/users/:id", async(req,res)=>{
    const result = await pool.query(
        "SELECT * FROM users WHERE id = $1",
        [req.params.id]
    );
    res.json(result.rows[0]);
})

app.post("/users",async(req,res)=>{
    const result = await pool.query(
        "INSERT INTO users (name) VALUES ($1) RETURNING *",
        [req.body.name]
    );
    res.json(result.rows[0]);
})

app.put("/users/:id", async(req,res)=>{
    const result = await pool.query(
        "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
        [req.body.name, req.params.id]
    );
    res.json(result.rows[0]);
});

app.delete("/users/:id",async(req,res)=>{
    await pool.query(
        "DELETE FROM users WHERE id = $1",
        [req.params.id]
    );
    res.json({ message: "Deleted" });
})

app.listen(3000, "0.0.0.0", ()=>console.log("Server running on port 3000"));