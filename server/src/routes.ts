import express from 'express';
import UserController from '@controllers/UserController'
import FooterController from '@controllers/FooterController'


const routes = express.Router();
const userController = new UserController();
const footerController = new FooterController();


routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/footer', footerController.create);
routes.get('/footer', footerController.get);
routes.delete('/footer/:id', footerController.delete);
routes.put('/footer/:id', footerController.update);


export default routes;