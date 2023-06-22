import * as create from './Create';
import * as updateById from './UpdateById';
import * as deleteById from './DeleteById';
import * as getAll from './GetAll';
import * as getById from './GetById';

export const PessoasControllers = {
    ...create,
    ...updateById,
    ...deleteById,
    ...getAll,
    ...getById
};
