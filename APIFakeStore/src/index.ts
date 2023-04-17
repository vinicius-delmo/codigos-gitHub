import express, { Request, Response }  from "express"
import {router} from "./routes"
const app = express()
app.use(express.json());


app.use("/api/v1", router);

const port = 3000
app.listen(port,()=>{
    console.log(`Listening on ${port}`)
})