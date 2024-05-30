import express from 'express';
import EstablishmentController from '../controller/establishmentController.js';

const establishmentRoutes = express.Router();

establishmentRoutes.get('/', EstablishmentController.getAll);

establishmentRoutes.get('/:id', EstablishmentController.getById);

establishmentRoutes.get('/name/:name', EstablishmentController.getByName);

establishmentRoutes.post('/', EstablishmentController.create);

establishmentRoutes.put('/:id', EstablishmentController.update);

establishmentRoutes.delete('/:id', EstablishmentController.delete);

export default establishmentRoutes;