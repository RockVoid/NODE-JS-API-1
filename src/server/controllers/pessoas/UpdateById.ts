import * as yup from 'yup';
import { IPessoa } from '../../database/models/Pessoa';
import { validation } from '../../shared/middleware/Validation';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PessoasProvider } from '../../database/providers/pessoas';

interface IParamProps {
    id?: number
}

interface IBodyProps extends Omit<IPessoa, 'id'> { }

export const updateByIdValidation = validation((getSchema) => ({
    body: getSchema<IBodyProps>(yup.object().shape({
        email: yup.string().required().email(),
        cidadeId: yup.number().required().integer(),
        nomeCompleto: yup.string().required().min(3)
    })),
    param: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    }))
}));

export const updateById = async (req: Request<IParamProps, {}, IBodyProps>, res: Response) => {
    if(!req.params.id) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            errors: {
                default: 'O parâmetro "ID" precisa ser informado!'
            }
        });
    }

    const result = await PessoasProvider.updateById(req.params.id, req.body);

    if(result instanceof Error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            errors: {
                default: result.message
            }
        });
    }

    return res.status(StatusCodes.NO_CONTENT).send();
};
