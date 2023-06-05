import express from 'express';
import UserController from '@controllers/UserController'
import ClientController from '@controllers/ClientController'
import ConstructController from '@controllers/ConstructController'
import FooterController from '@controllers/FooterController'
import ConstructBenefitsController from '@controllers/ConstructBenefitsController'

const routes = express.Router();
const userController = new UserController();
const clientController = new ClientController();
const constructController = new ConstructController();
const footerController = new FooterController();
const constructBenefitsController = new ConstructBenefitsController();

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

routes.post('/constructbenefit', constructBenefitsController.create);
routes.get('/constructbenefit', constructBenefitsController.get);
routes.delete('/constructbenefit/:id', constructBenefitsController.delete);
routes.put('/constructbenefit/:id', constructBenefitsController.update);


routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);



export default routes;
