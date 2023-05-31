import * as yup from 'yup';
import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

interface IQueryProps {
    page?: number,
    limit?: number,
    filter?: string
}

export const getAllValidation = validation((getSchema) => ({
    query: getSchema<IQueryProps>(yup.object().shape({
        page: yup.number().required().moreThan(0),
        limit: yup.number().required().moreThan(0),
        filter: yup.string().optional()
    }))
})); 

export const getAll = async (req: Request<{}, {}, {}, IQueryProps>, res: Response) => {
    res.setHeader('x-total-count', 1);
    res.setHeader('access-control-expose-headers', 'x-total-count');
  
    return res.status(StatusCodes.OK).json([
        {
            id: 1,
            nome: 'Caxias do Sul',
        }
    ]);
};
