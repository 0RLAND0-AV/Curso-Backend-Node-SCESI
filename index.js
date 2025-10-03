const express = require('express')

const routes = require('./src/routes')

const port = 3000

const app = express()

// Para JSON
app.use(express.json());

// Para formularios
app.use(express.urlencoded({ extended: true }));

app.use('/',routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

