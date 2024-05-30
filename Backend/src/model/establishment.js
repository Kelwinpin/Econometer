import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

export const Establishment = sequelize.define('Establishment', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    cnpj: {
        type: DataTypes.CHAR(14),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'establishment',
    timestamps: false
});