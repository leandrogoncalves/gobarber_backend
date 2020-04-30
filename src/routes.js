import { Router } from 'express';

/**  include  Configs */
import multer from 'multer';
import multerConfig from './config/multer';

/** include Middlewares */
import authMiddleware from './app/middlewares/auth';

/**  include  Controllers */
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/sessions', SessionController.store);

/** Middleawares */
routes.use(authMiddleware);

/** User */
routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

/** File */
routes.post('/files', upload.single('file'), FileController.store);

/** Provider */
routes.get('/providers', ProviderController.index);

export default routes;
