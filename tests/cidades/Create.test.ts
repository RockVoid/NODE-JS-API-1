import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Primeiro teste', () => {
    
    it('Cria registro', async () => {
        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Cidade de Caxias', estado: 'RGS' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    });


    it('Tenta criar registro com o campo estado muito curto!', async () => {
        const res2 = await testServer 
            .post('/cidades')
            .send({ nome: 'Caxias', estado: 'Ce' });

        expect(res2.body).toHaveProperty('errors.body.estado');
    });
});

