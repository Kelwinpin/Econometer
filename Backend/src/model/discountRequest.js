import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import Users from './users';
import Establishment from './establishment';

const DiscountRequest = sequelize.define('DiscountRequest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    validity: {
        type: DataTypes.DATE,
        allowNull: false
    },
    discount_value: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: false
    },
    purchase_value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    validation_date: {
        type: DataTypes.DATE
    },
    user_id: {
        type: DataTypes.CHAR(11),
        allowNull: false
    },
    establishment_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'discount_request',
    timestamps: false
});

DiscountRequest.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'cpf' });
DiscountRequest.belongsTo(Establishment, { foreignKey: 'establishment_id', targetKey: 'id' });

export default DiscountRequest;
