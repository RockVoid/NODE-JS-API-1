import { Router } from 'express';

const router = Router();

router.get('/', (_, res) => {
    console.log('First Touch baby!!!');
    return res.json({ result: 'Okay!' });
});

router.post('/', (_, res) => {
    console.log('Post Touch baby!!!');
    return res.json({ result: 'Okay!' });
});

export { router };
