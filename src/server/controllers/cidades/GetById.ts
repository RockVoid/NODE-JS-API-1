import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CidadesProvider } from '../../database/providers/cidades';

interface IParamsProps {
    id?: number
}

export const getByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0) 
    }))
}));

export const getById = async (req: Request<IParamsProps>, res: Response) => {
    if(!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parametro id precisa ser informado!'
            }
        });
    }
    
    const result = await CidadesProvider.getById(req.params.id);
    if(result instanceof Error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.OK).json(result);
};
