import { NextFunction, Request, Response } from "express";
import appError from "../utils/utils.error";

export function errorMiddleware(err:any,req:Request,res:Response,next:NextFunction){

    console.log(err)
    if(err instanceof appError){
        res.status(err.code).json({
            message :  err.message
        })
        return
    }
    res.status(500).json({
        message :"internal server error"
    })
}