import  express  from "express"
import cors from "cors"
import mongoose from "mongoose"
import "./env-config.js"
import boatData from "./dataSchema.js"

const PORT_SERVER = process.env.PORT_SERVER
const DB_CONNECTION = process.env.DB_CONNECTION

const app = express()
app.use(express.json())

app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        preflightContinue: false,
        optionsSuccessStatus: 200
    }
    ))


    app.post('/api/v1/new-contact' , async (req,res) => {
    try {
        const data = await boatData.create(req.body)
        res.status(200).json(data)
    } catch (err) {
        console.log(req.body)
        console.log(err.message)
        res.status(500).json({message: err.message})
    }
    })












mongoose.connect(DB_CONNECTION)
.then(() => {
    app.listen(PORT_SERVER, () => console.log("Server running on PORT"+ " " + PORT_SERVER + " 👍"))
    console.log("Connected to DB 👍")
})
.catch((err) => console.log(err + "ERROR - not able to connect to DB 👎"))