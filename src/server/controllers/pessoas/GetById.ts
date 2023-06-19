import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { PessoasProvider } from '../../database/providers/pessoas';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IParamProps {
    id: number
}

export const getByIdaVlidation = validation((get) => ({
    params: get<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}));


export const getById = async (req: Request<IParamProps>, res: Response) => {

    if(!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "ID" precisa ser informado!'
            }
        });
    }

    const result = await PessoasProvider.getById(req.params.id);
    if(result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }
};
