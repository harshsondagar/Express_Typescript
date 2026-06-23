import router from "express"


const v1Router = router()

v1Router.use("/auth")
v1Router.use("/user")

export default v1Router