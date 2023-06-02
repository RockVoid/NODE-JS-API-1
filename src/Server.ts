import express from 'express';
import '../shared/TranslationsYup';
import { router } from '../routes';

const server = express();

server.use(express.json());
server.use(router);

export { server };
