import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Primeiro teste', () => {
    
    it('Cria registro', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Cidade de Caxias' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    });


});

