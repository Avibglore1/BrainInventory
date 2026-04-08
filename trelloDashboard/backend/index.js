import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import http from "http";
import {Server} from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server,{cors: {origin: "*"}});

app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

  
