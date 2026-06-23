import router from "express"
import userRouter from "./user.router"


const v1Router = router()

v1Router.use("/auth")
v1Router.use("/user",userRouter)

export default v1Router