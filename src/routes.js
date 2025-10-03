// 1. Importa el módulo completo de Express
const express = require('express');

// 2. Llama al método .Router() del objeto Express para crear la instancia del router
const router = express.Router();
const voteController = require('./controllers');
// 3. Define tus rutas en esta instancia
router.get('/hello', (req, res) => {
    // Es buena práctica usar .status() para confirmar un código 200/OK
    res.status(200).send('Hello World from routes! The router is now working correctly.');
})

router.post('/data', voteController.saveVoteController);

// 4. Exporta la instancia del router
module.exports = router;
