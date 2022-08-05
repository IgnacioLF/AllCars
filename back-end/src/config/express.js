import express from 'express';
import cors from 'cors';
import userRouter from '#Routes/user.routes.js';
import carRouter from '#Routes/car.routes.js';
import photoRouter from '#Routes/photo.routes.js';

const expressApp = express();
expressApp.use(cors());

// make uploads public
expressApp.use('/uploads', express.static('uploads'));

// Midlewares
expressApp.use(express.json());

// Routes
expressApp.use('/user', userRouter);
expressApp.use('/car', carRouter);
expressApp.use('/photo', photoRouter);

export default expressApp;
