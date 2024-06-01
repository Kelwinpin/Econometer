import express from 'express';
import UsersController from '../controller/usersController.js';

const userRoutes = express.Router();

userRoutes.get('/', UsersController.getAll);

userRoutes.get('/:cpf', UsersController.getByCPF);

userRoutes.post('/', UsersController.create);

userRoutes.put('/:cpf', UsersController.update);

userRoutes.delete('/:cpf', UsersController.delete);

export default userRoutes;
