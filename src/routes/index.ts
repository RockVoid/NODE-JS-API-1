import { Router } from 'express';

import { CidadesController } from '../controllers/cidades';

const router = Router();

router.get('/', (_, res) => {
    console.log('First Touch baby!!!');
    return res.json({ result: 'Okay!' });
});

router.post(
    '/cidades', 
    CidadesController.createValidation,
    CidadesController.create
);

export { router };
