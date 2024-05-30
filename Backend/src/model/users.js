import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

export const Users = sequelize.define("Users", {
    cpf: {
        type: DataTypes.CHAR(11),
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    }
    }, 
    {
        tableName: 'user',
        timestamps: false
    }
)