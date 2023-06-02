import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamsProps {
    id?: number
}

export const deleteByIdValidation = validation((getSchema) => ({
    params: getSchema<IParamsProps>(yup.object().shape({
        id: yup.number().required().moreThan(0)
    }))
}));

export const deleteById = async (req: Request<IParamsProps>, res: Response) => {
    console.log(req.params);
  
    if(Number(req.params.id) === 999999) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: 'Registro não encontrado'
            }
        });
    }

    res.status(StatusCodes.NO_CONTENT).send();
};
