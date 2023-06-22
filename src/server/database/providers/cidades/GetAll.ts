import { ETableNames } from '../../ETableNames';
import { Knex } from '../../knex';
import { ICidade } from '../../models/Cidade';

export const getAll = async (page: number, id: number, filter: string, limit: number): Promise<ICidade[] | Error>  => {
    try {
        const result = await Knex(ETableNames.cidade)
            .select('*')
            .where('id', '=', Number(id))
            .orWhere('nome', 'like', `${filter}`)
            .offset((page - 1) * limit) // Ponto de início
            .limit(limit);

        if(id > 0 && result.every(item => item.id !== id)) {
            const resultById = await Knex(ETableNames.cidade)
                .select('*')
                .where('id', '=', id)
                .first();

            if(resultById) return [resultById, ...result];
        }

        return new Error('Erro ao buscar registros!');
    } catch (error) {
        console.log(error);
        return new Error('Erro ao consultar os registros!');
    }
};
