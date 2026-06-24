import "dotenv/config"
import express, { Request, Response, response } from "express"
import cors from "cors"
import v1Router from "./routes/v1"
import v2Router from "./routes/v2"
import { errorMiddleware } from "./middleware/error.middleware"

const app = express()


app.use(cors())
app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    res.status(200).json({
        message : "hello! welcome",
    })
})

app.use("/api/v1",v1Router)
app.use("/api/v2",v2Router)

app.use(errorMiddleware)


const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`running on port : ${PORT}`)
})