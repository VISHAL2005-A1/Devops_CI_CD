import express from "express";
import {client} from"@repo/db";

const app=express();
app.use(express.json());

app.post("/signup",async(req,res)=>{
    try{
        const{username,password}=req.body;
        if(!username||!password){
            return res.status(400).json({
                message:"Username and password are required"
            })
        }

        const user=await client.user.create({
            data:{
                username,
                password,
            }
        });
        return res.status(500).json({
            message:"User created successfully",
            user:{
                id:user.id,
                username:user.username,
            }
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            message:"Something went wrong",
        })
    }
})

app.get("/",(req,res)=>{
    res.send("Hi there!")
})

app.listen(3000);