import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { IPessoa } from '../../models/Pessoa';

export const getAll = async (page: number, filter: string, limit: number): Promise<IPessoa[] | Error> => {
    try {
        const result = await Knex(ETableNames.pessoa)
            .select('*')
            .where('nomeCompleto', 'like', `%${filter}%`)
            .offset((page - 1) * limit)
            .limit(limit); 

        return result;
    } catch (error) {
        console.log(error);
        return new Error('Erro ao buscar registros em Pessoa.');
    }
};
