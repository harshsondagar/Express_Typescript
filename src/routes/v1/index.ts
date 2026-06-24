import {Router} from "express"
import userRouter from "./user.router"
import authRouter from "./auth.router"


const v1Router = Router()

v1Router.use("/auth",authRouter)

v1Router.use("/user",userRouter)


export default v1Router