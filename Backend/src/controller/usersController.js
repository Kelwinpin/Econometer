import { Users } from '../model/users.js';

const UsersController = {
  async getAll(req, res) {
    try {
      const users = await Users.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getByCPF(req, res) {
    const { cpf } = req.params;
    try {
      const user = await Users.findOne({ where: { cpf } });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async create(req, res) {
    const { cpf, name, birthday } = req.body;
    try {
      const newUser = await Users.create({ cpf, name, birthday });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async update(req, res) {
    const { cpf } = req.params;
    const { name, birthday } = req.body;
    try {
      const user = await Users.findOne({ where: { cpf } });
      if (user) {
        await user.update({ name, birthday });
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async delete(req, res) {
    const { cpf } = req.params;
    try {
      const user = await Users.findOne({ where: { cpf } });
      if (user) {
        await user.destroy();
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
};

export default UsersController;
