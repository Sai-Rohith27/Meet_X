import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import connetToSocket from "./controllers/socketManager.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app=express();
const server=createServer(app);
const io=new connetToSocket(server);


app.set("port",(process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({extended:true,limit:"40kb"}));

app.get("/",(req,res)=>{
    return res.json({"hello":"world"});
});

const start = async () => {
  const connectionDb = await mongoose.connect("mongodb+srv://earningmoney2027_db_user:Meet_x123@meetx.cg7yzj4.mongodb.net/");
  console.log(`MONGO Connected DB HOSt: ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("LISTENIN ON PORT 8000");
  });
};

start();
