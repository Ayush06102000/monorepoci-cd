import { WebSocketServer } from "ws";
import {prisma} from '@repo/prisma/client'
const wss = new WebSocketServer({port:8080})

wss.on("connection",async function(ws){
    const user = await prisma.user.create({
        data:{
            username:JSON.stringify(Math.random()),
            password:JSON.stringify(Math.random())
        }
    })
    ws.on('message',(data)=>{
        console.log(data)
    })
})