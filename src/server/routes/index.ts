import { Router } from 'express';

import { CidadesController } from '../controllers/cidades';
import { PessoasControllers } from '../controllers/pessoas';

const router = Router();

router.get('/cidades', CidadesController.getAllValidation, CidadesController.getAll);
router.get('/cidades/:id', CidadesController.getByIdValidation, CidadesController.getById);
router.post('/cidades', CidadesController.createValidation, CidadesController.create);
router.put('/cidades/:id', CidadesController.updateByIdValidation, CidadesController.updateById);
router.delete('/cidades/:id', CidadesController.deleteByIdValidation, CidadesController.deleteById);

router.get('/pessoas', PessoasControllers.getAllValidation, PessoasControllers.getAll);
router.get('/pessoas/:id', PessoasControllers.getByIdValidation, PessoasControllers.getById);
router.post('/pessoas', PessoasControllers.createValidation, PessoasControllers.create);
router.put('/pessoas/:id', PessoasControllers.updateByIdValidation, PessoasControllers.updateById);
router.delete('/pessoas/:id', PessoasControllers.deleteByIdValidation, PessoasControllers.deleteById);


export { router };
