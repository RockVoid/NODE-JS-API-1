import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamsProps {
    id?: number 
} 

interface IBodyProps {
    nome: string
}

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0)
    }))
}));

export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
    console.log(req.params);
    console.log(req.body);  

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Não implementado' });
};
