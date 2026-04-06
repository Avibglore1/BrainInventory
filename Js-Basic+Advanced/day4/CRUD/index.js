import express from "express"
const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})

let users = [
    {id: 1, name: "Avinash"},
    {id: 2,name: "Rahul"}
]

app.get("/users", (req,res)=>{
    res.json(users)
})

app.get("/users/:id", (req,res)=>{
    const user = users.find(u=>u.id==req.params.id);
    res.json(user);
})

app.post("/users",(req,res)=>{
    const newUser = {id: Date.now(),name:req.body.name};
    users.push(newUser);
    res.json(newUser);
})

app.put("/users/:id", (req,res)=>{
    users = users.map(u=>u.id==req.params.id ? {...u,name:req.body.name} : u);
    res.json({message: "updated", users})
});

app.delete("/users/:id",(req,res)=>{
    users = users.filter(u=>u.id!==req.params.id);
    res.json({message: "Deleted",users})
})

app.listen(3000, "0.0.0.0", ()=>console.log("Server running on port 3000"));