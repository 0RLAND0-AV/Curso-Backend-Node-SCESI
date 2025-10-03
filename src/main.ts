import express from "express";
// import routes from './routes'


const port = 3003
const app = express()
// Para JSON
app.use(express.json());
// Para formularios
app.use(express.urlencoded({ extended: true }));

 
app.get('/test-ts', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



