import router from "express"


const v2Router = router()

v2Router.use("/auth")
v2Router.use("/user")

export default v2Router