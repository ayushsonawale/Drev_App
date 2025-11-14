import jwt from "jsonwebtoken";
import express from "express";
import {JWT_SECRET} from '@repo/backend-common/config'
import { middleware } from "./middleware";
import {CreateUserSchema, RoomSchema, SigninSchema} from "@repo/common/type"
const app = express()

app.post('/signup', (res, req) => {
    //@ts-ignore
    const data = CreateUserSchema.safeParse(req.body)
    if(!data.success){
        //@ts-ignore
        res.json({
            message: "Incorrect inputs.."
        })
        return 
    }
    //@ts-ignore
    res.json({
        roomId: "123"
    })
})
app.post('/signin', (res, req) => {
    //@ts-ignore
    const data = SigninSchema.safeParse(req.body)
    if(!data.success){
        //@ts-ignore
        res.json({
            message: "Incorrect inputs.."
        })
        return 
    }
    const userId = 1;
    const token = jwt.sign({
        userId
    }, JWT_SECRET)
    //@ts-ignore
    res.json({
        token
    })
})
app.post('/room', middleware, (res, req) => {
    //@ts-ignore
    const data = RoomSchema.safeParse(req.body)
    if(!data.success){
        //@ts-ignore
        res.json({
            message: "Incorrect inputs.."
        })
        return 
    }
    //@ts-ignore
    res.json({
        roomId: 123
    })
})


app.listen(3001)