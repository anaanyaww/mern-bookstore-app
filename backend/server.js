import express from "express";
import cors from 'cors';         // Replace require with import
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import bookRoutes from './routes/book.route.js';



dotenv.config();

const app = express();

const PORT = process.env.PORT || 5002;

app.use(express.json());

app.use(cors());  // Allow cross-origin requests from the frontend


app.use('/books', bookRoutes);

app.get('/', (req,res) => {
    console.log(req);
    return res.status(200).send('Welcome to MERN tutorial');
});



app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:"+PORT);
});

//2jrJVhjF65PJ4Spc