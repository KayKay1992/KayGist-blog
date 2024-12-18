import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
    () => {console.log('MongoDB Connected')
}).catch(err => {console.log(err)})


const app = express();

app.use(express.json());

app.use(cookieParser()); // to parse cookies

app.listen(3000, () =>{
    console.log('Server is running on port 3000');
})

app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)


// Middleware to check if user is authenticated

app.use((err ,req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})