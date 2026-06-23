import router from "express"
import authRouter from "./auth.router"


const v1Router = router()

v1Router.use("/auth",authRouter)
// v1Router.use("/user")

export default v1Router