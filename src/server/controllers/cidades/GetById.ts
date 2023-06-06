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
    if(Number(req.params.id) === 999999) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Registro não encontrado!'
            }
        });
    }
    
    return res.status(StatusCodes.OK).json({
        id: 1,
        nome: 'Caxias do Sul',
    });
};
