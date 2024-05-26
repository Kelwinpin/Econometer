import express from 'express';
import { getAllCards, createCard } from '../controller/cardController.js';

const router = express.Router();

router.get('/cards', getAllCards);
router.post('/card', createCard);

export default router;
