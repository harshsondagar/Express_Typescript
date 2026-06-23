import router, { Request, Response } from "express"

const authRouter = router()

authRouter.post("/register",(req:Request,res:Response)=>{

})

authRouter.post("/login",(req:Request,res:Response)=>{
    
})

authRouter.post("/logout",(req:Request,res:Response)=>{
    
})

authRouter.post("/refresh",(req:Request,res:Response)=>{
    
})

<<<<<<< HEAD

=======
authRouter.post("/avatar",(req:Request,res:Response)=>{
    
})
    
>>>>>>> feat/auth

export default authRouter