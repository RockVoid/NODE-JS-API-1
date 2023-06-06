import express from 'express';
import './server/shared/TranslationsYup';
import { router } from './server/routes';

const server = express();

server.use(express.json());
server.use(router);

export { server };
