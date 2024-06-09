import express from 'express';
import DiscountRequestController from '../controller/discountRequestController.js';

const discountRequestRoutes = express.Router();

discountRequestRoutes.post('/:establishment_id/:discount_pattern_id/:user_id/', DiscountRequestController.create);

discountRequestRoutes.get('/:establishment_id/:user_id/:request_id', DiscountRequestController.getById);

discountRequestRoutes.get('/user/:user_id', DiscountRequestController.getByUserId)

discountRequestRoutes.get('/establishment/:establishment_id', DiscountRequestController.getByEstablishmentId)

discountRequestRoutes.get('safeMoney/:user_id', DiscountRequestController.getSafeMoney)

discountRequestRoutes.put('/:establishment_id/:user_id/:request_id', DiscountRequestController.update);

discountRequestRoutes.delete('/:establishment_id/:user_id/:request_id', DiscountRequestController.delete);

export default discountRequestRoutes;
