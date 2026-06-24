import router from "express"
import authRouter from "./auth.router"
import userRouter from "./user.router"


const v2Router = router()

v2Router.use("/auth",authRouter)
v2Router.use("/user",userRouter)

export default v2Router