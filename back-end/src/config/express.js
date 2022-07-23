import express from 'express';
import cors from 'cors';
import userRouter from '#Routes/user.routes.js';

const expressApp = express();
expressApp.use(cors());

// Midlewares
expressApp.use(express.json());

// Routes
expressApp.use('/user', userRouter);

export default expressApp;
