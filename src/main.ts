import express from "express";
import router from './routes';
import dotenv from 'dotenv'
import helthRoter from './helthCheck/helthCheck.route';
import VoteRouter from './votos/votos.routes';

dotenv.config()
//require('dotenv').config();

const port = process.env.PORT || 3003
const app = express()
// Para JSON y Formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router)
app.use('/', helthRoter)
app.use('/votos', VoteRouter)


app.listen(port, () => {
    console.log(`Servidor corriendo en: http://localhost:${port}`);
});



