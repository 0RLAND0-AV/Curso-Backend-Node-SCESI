// src/config/server.routes.ts
import {Request, Response, Router} from 'express'

import helthRoter from '../modules/helthCheck/helthCheck.route'
import VoteRouter from '../modules/votes/votos.routes'

const router = Router()

router.use('/', helthRoter)
router.use('/voto', VoteRouter)

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Bienvenido a la API de Votaciones',
        ok: true
    });
});
router.use((req, res) => {
  res.status(404).send({
    message: 'page not found',
    status: 404,
    ok: false,
  })
})

export default router;
