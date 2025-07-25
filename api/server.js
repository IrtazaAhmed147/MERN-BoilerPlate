import express from 'express'
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser'
import authRoute from './routes/auth.routes.js'
import userRoute from './routes/users.route.js'
import productRoute from './routes/product.routes.js'
import { connectDB } from './utils/connectDB.js'
import helmet from "helmet"
// import mongoSanitize from "express-mongo-sanitize"

const app = express()

dotenv.config()


// mongodb connection
connectDB()


// middleware
app.use(cookieParser())
app.use(express.json())
app.use(helmet())
// app.use(mongoSanitize())

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))



// routes
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)
app.use('/api/product', productRoute)



app.listen(8800, () => {
    // connect()
    console.log("Server is running at port 8800");
})