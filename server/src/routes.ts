import express from 'express';
import UserController from '@controllers/UserController'
import ClientController from '@controllers/ClientController'
import ConstructController from '@controllers/ConstructController'

const routes = express.Router();
const userController = new UserController();
const clientController = new ClientController();
const constructController = new ConstructController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/client', clientController.create);
routes.get('/client', clientController.get);
routes.delete('/client/:id', clientController.delete);
routes.put('/client/:id', clientController.update);

routes.post('/construct', constructController.create);
routes.get('/construct', constructController.get);
routes.delete('/construct/:id', constructController.delete);
routes.put('/construct/:id', constructController.update);


export default routes;
