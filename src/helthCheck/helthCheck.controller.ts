import { Request, Response } from "express";

export const healthCheck = (req: Request, res: Response) => {
  res.status(200).send({
        message: 'healthcheck funcionando',
        status: 200,
        ok: true,
    });
};
