import { WebSocketServer } from "ws";
import db from"@repo/db";
const wss=new WebSocketServer({
    port:3001,
})

wss.on("connection",async(socket)=>{

    try{
        await db.user.create({
            data:{
                username:Math.random().toString(),
                password:Math.random().toString(),
            }
        })
        socket.send("Hi there you are connect to the server");

    }catch(err){
        console.log(err);
    }
})