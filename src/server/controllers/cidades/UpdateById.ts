import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICidade } from '../../database/models/Cidade';

interface IParamsProps {
    id?: number 
} 

interface IBodyProps extends Omit<ICidade, 'id'> {}

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        nome: yup.string().required().min(3)
    })),
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0)
    }))
}));

export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {    
    if(Number(req.params.id) === 999999) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Registro não encontrado!'
            }
        });
    }  
    
    return res.status(StatusCodes.NO_CONTENT).json({
        message: 'Atualizado com sucesso' 
    });
};
