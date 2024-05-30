import express from 'express';
import UsersController from '../controller/usersController.js';

const userRoutes = express.Router();

// Rota para listar todos os usuários
userRoutes.get('/users', UsersController.getAll);

// Rota para obter um usuário por CPF
userRoutes.get('/users/:cpf', UsersController.getByCPF);

// Rota para criar um novo usuário
userRoutes.post('/users', UsersController.create);

// Rota para atualizar um usuário existente
userRoutes.put('/users/:cpf', UsersController.update);

// Rota para excluir um usuário
userRoutes.delete('/users/:cpf', UsersController.delete);

export default userRoutes;
