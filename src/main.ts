// src/main.ts
import express from "express";
import router from './config/server.routes';
import dotenv from 'dotenv'
import helthRoter from './modules/helthCheck/helthCheck.route';
import VoteRouter from './modules/votes/votos.routes';

dotenv.config()
//require('dotenv').config();
console.log('process.env.PORT', process.env.PORT)

const PORT = process.env.PORT || 3003
const app = express()
// Para JSON y Formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});







