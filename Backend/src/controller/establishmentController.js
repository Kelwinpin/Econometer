import { where } from 'sequelize';
import {Establishment} from '../model/establishment.js';

const EstablishmentController = {
    async getAll(req, res) {
        try {
            const establishments = await Establishment.findAll()
            res.json(establishments)
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }   
    },

    async getById(req, res) {
        const { id } = req.params;
        
        try {
            const establishment =  await Establishment.findOne({where: { id }}) 
            if (establishment) {
                res.json(establishment)
            } else {
                res.status(404).json({ message: 'Internal server error'})
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async getByName(req, res) {
        const { name } = req.params;
        
        try {
            const establishment =  await Establishment.findOne({where: { name }})
            if (establishment) {
                res.json(establishment)
            } else {
                res.status(404).json({ message: 'Internal server error'})
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async create(req, res) {
        const { name, cnpj, address } = req.body;
        try {
          const newEstablishment = await Establishment.create({ name, cnpj, address });
          res.status(201).json(newEstablishment);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
    },

    async update(req, res) {
        const { id } = req.params;
        const { name, address } = req.body;
        try {
          const establishment = await Establishment.findOne({ where: { id } });
          if (establishment) {
            await establishment.update({ name, address });
            res.json(establishment);
          } else {
            res.status(404).json({ message: 'Establishment not found' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      },
    
      async delete(req, res) {
        const { id } = req.params;
        try {
          const establishment = await Establishment.findOne({ where: { id } });
          if (establishment) {
            await establishment.destroy();
            res.json({ message: 'Establishment deleted successfully' });
          } else {
            res.status(404).json({ message: 'Establishment not found' });
          }
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      }
};

export default EstablishmentController;