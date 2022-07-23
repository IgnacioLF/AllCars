import express from 'express';
import cors from 'cors';

const expressApp = express();
expressApp.use(cors());

// Midlewares
expressApp.use(express.json());

// Routes

export default expressApp;
