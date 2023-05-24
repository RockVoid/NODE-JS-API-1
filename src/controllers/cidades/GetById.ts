import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamsProps {
    id?: number
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0) 
    }))
}));

export const getById = async (req: Request<IParamsProps>, res: Response) => {
    console.log(req.params.id);
    
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Não implementado' });
};
