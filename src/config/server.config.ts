import bodyParser from 'body-parser'
import express from 'express'

import AppRoutes from './server.routes'

const app = express()
    
// app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', AppRoutes)

export default app;
