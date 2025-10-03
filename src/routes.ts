import { Router } from 'express'
import { saveVoteController } from './controllers';

const router = Router();

router.get('/', (req, res) => {
    res.status(200).send({
        message: 'Bienvenido a la API de Votaciones',
        ok: true
    });
});

router.post('/vote-old', saveVoteController);

export default router;