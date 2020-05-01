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
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';

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

/** Appointments */
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

/** Schedule */
routes.get('/schedules', ScheduleController.index);

/** Notifications */
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;
