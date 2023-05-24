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

export const getAll = async (req: Request<{}, {}, IQueryProps>, res: Response) => {
    console.log(req.body);

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Não implementado' });
};
