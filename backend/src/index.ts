import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

import { DATABASE_URL } from "./utils/env"
import router from "./routes/index"

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

mongoose
.connect(DATABASE_URL, { dbName: "rinku" })
.then(() => console.log('Connected to database'))
.catch((error) => console.log(error))

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Server is running"
    })
})

app.use('/api', router)

// const PORT = 3000
// app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`))