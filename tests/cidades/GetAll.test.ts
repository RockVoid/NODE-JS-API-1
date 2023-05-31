import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';

describe('Cidades - GetAll', () => {
    it('Buscar todos os registros', async () => {
        
        const res1 = await testServer
            .post('/cidades')
            .send({ nome: 'Caxias Do Sul', estado: 'Rio Grande Do Sul' });

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer
            .get('/cidades?page=1&limit=1&filter=0')
            .send();
        
        expect(Number(resBuscada.header['content-length'])).toBeGreaterThan(0);
        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body.length).toBeGreaterThan(0);
    });
});
