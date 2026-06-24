import {Router, Request, Response } from "express"
import appError from "../../utils/utils.error"

const authRouter = Router()

authRouter.post("/register",(req:Request,res:Response)=>{
    
})

authRouter.post("/login",(req:Request,res:Response)=>{
    throw Error("Dada")
})

authRouter.post("/logout",(req:Request,res:Response)=>{
    
})

authRouter.post("/refresh",(req:Request,res:Response)=>{
    
})

authRouter.post("/avatar",(req:Request,res:Response)=>{
    
})
    

export default authRouter