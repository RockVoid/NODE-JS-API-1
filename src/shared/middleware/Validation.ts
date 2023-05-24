import * as yup from 'yup';

import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

type IProperty = 'body' | 'query' | 'params' | 'header';

type TGetSchema = <T extends yup.Maybe<yup.AnyObject>>(schema: yup.ObjectSchema<T>) => yup.ObjectSchema<T> 

type TAllSchemas = Record<IProperty, yup.ObjectSchema<any>>; 

type TGetAllSchemas = (getSchema: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler;
 
export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {
    const schemas = getAllSchemas(schema => schema);

    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as IProperty], { abortEarly: false });
        } catch (err) {
            const yupError = err as yup.ValidationError; 
            const errors: Record<string, string> = {};
    
            yupError.inner.forEach(error => {
                if (!error.path) return;
                errors[error.path] = error.message;
            });
            
            errorsResult[key as IProperty] = errors;            
        }
    });

    if(Object.entries(errorsResult).length === 0) {
        return next();
    } else {
        return res.status(StatusCodes.BAD_REQUEST).json({ errors: errorsResult });
    }
};
