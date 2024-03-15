import express from "express";
import cors from "cors";
import indexRouter from './routes/index.routes.js';
const PORT = process.env.PORT || 8080

const app = express()

console.clear()

app.use(cors());
app.use("/API/v1/", indexRouter)



app.get("/", (req, res) => {

    try {
        res.status(200).send("MAIN API PAGE")

    } catch (error) {
        res.status(500).send(error)
    }

})

app.listen(PORT, () => {
    console.log("Server running")
})