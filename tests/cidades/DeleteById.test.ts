import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('Cidades - DeleteById', () => {

    it('Apaga registro', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Fortaleza', estado: 'Ceara' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resCleaned = await testServer
            .delete(`/cidades/${res1.body.id}`)
            .send();

        expect(resCleaned.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Apaga registro que não existe', async () => {
        const res1 = await testServer
            .delete('/cidades/999999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });

});
