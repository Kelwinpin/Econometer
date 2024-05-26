import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

export const Card = sequelize.define('Card', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatarUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

