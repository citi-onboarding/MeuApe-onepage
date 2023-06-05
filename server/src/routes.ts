import express from 'express';
import UserController from '@controllers/UserController'
import FooterController from '@controllers/FooterController'
import ConstructBenefitsController from '@controllers/ConstructBenefitsController'


const routes = express.Router();
const userController = new UserController();
const footerController = new FooterController();
const constructBenefitsController = new ConstructBenefitsController();


routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);


routes.post('/constructbenefit', constructBenefitsController.create);
routes.get('/constructbenefit', constructBenefitsController.get);
routes.delete('/constructbenefit/:id', constructBenefitsController.delete);
routes.put('/constructbenefit/:id', constructBenefitsController.update);


export default routes;