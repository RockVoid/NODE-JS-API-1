import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - Update By Id', () => {

    it('Atualiza Registro', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Caxias Do Sul', estado: 'Rio Grande Do Sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const res2 = await testServer
            .put(`/cidades/${res1.body.id}`)
            .send({ nome: 'Fortaleza', estado: 'Ceara' });

        expect(res2.statusCode).toEqual(StatusCodes.NO_CONTENT);
    });

    it('Não atualiza registro inexistente', async () => {

        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Caxias Do Sul', estado: 'Rio Grande Do Sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const res2 = await testServer
            .put('/cidades/999999')
            .send({ nome: 'Rio Grande', estado: 'Rio Grande Do Sul' });

        expect(res2.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res2.body).toHaveProperty('errors.default');

    });

});
