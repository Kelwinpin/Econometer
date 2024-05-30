import express from 'express';
import UsersController from '../controller/usersController.js';

const userRoutes = express.Router();

userRoutes.get('/users', UsersController.getAll);

userRoutes.get('/users/:cpf', UsersController.getByCPF);

userRoutes.post('/users', UsersController.create);

userRoutes.put('/users/:cpf', UsersController.update);

userRoutes.delete('/users/:cpf', UsersController.delete);

export default userRoutes;
