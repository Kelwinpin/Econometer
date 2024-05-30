import express from 'express';
import DiscountPatternController from '../controller/discountPatternController.js';

const discountPatternRoutes = express.Router();

discountPatternRoutes.get('/establishments/:establishment_id/patterns', DiscountPatternController.getByEstablishmentId);

discountPatternRoutes.get('/establishments/:establishment_id/patterns/:pattern_id', DiscountPatternController.getById);

discountPatternRoutes.post('/establishments/:establishment_id/patterns', DiscountPatternController.create);

discountPatternRoutes.delete('/establishments/:establishment_id/patterns/:pattern_id', DiscountPatternController.delete);

export default discountPatternRoutes;
