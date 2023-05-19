import { Router } from 'express';

import { CidadesController } from '../controllers/cidades';

const router = Router();

router.get('/', (_, res) => {
    console.log('First Touch baby!!!');
    return res.json({ result: 'Okay!' });
});

router.post('/cidades', CidadesController.create);

router.post('/', (_, res) => {
    console.log('Post Touch baby!!!');
    return res.json({ result: 'Okay!' });
});

export { router };
