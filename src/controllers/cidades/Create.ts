import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';

export interface ICidade {
    nome: string,
    estado: string,
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(3)
    }))
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
    return res.status(StatusCodes.CREATED).json({ nome: req.body.nome, id: 1 });
};
