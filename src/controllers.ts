import { Request, Response } from "express";

export const saveVoteController = (req: Request, res: Response) => {
    const data = req.body;

    if (data.count < 40) {
    res.status(400).send({
        message: 'El conteo debe ser al menos 40',
        status: 400,
        ok: false,
    });
    return;
    }

    res.status(200).send({
        message: 'Voto recibido',
        status: 200,
        ok: true,
    });
}
