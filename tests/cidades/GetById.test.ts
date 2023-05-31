import { testServer } from '../jest.setup';
import { StatusCodes } from 'http-status-codes';

describe('Cidades - Get By Id', () => {

    it('Busca registro por ID', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Caxias do Sul', estado: 'Rio Grande Do Sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        console.log(res1.body.id);

        const res2 = await testServer
            .get(`/cidades/${res1.body.id}`)
            .send();

        expect(res2.statusCode).toEqual(StatusCodes.OK);
        expect(res2.body).toHaveProperty('nome');
    });

    it('Busca registro inexistente', async () => {
        const res1 = await testServer
            .get('/cidades/999999')
            .send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');
    });

});
