import dotenv from "dotenv"
import { app } from "./app.js"
import connectDB from "./config/db.js"
dotenv.config({path:".env"})

const port=process.env.PORT||5000

connectDB().then(()=>{
    app.listen(port,()=>{console.log(`server is running on port:${port}`);})
}).catch((errror)=>console.log(`there was some error:${errror}`))
