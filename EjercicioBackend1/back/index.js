import express from "express";
import indexRoutes from './routes/index.routes.js'
import cors from "cors";

const app = express()

console.clear()

app.use(cors());

app.use("/API/V1/", indexRoutes)


app.get("/", (req,res)=>{
    res.send("MAIN API PAGE")
})

app.listen(8080, ()=>{
    console.log("Server running")
})