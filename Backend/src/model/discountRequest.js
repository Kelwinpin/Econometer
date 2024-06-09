import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import {Users} from './users.js';
import {Establishment} from './establishment.js';
import DiscountPattern from './discountPattern.js';

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
    },
    discount_pattern_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'discount_request',
    timestamps: false
});

DiscountRequest.belongsTo(Users, { foreignKey: 'user_id', targetKey: 'cpf' });
DiscountRequest.belongsTo(Establishment, { foreignKey: 'establishment_id', targetKey: 'id' });
DiscountRequest.belongsTo(DiscountPattern, { foreignKey: 'discount_pattern_id', targetKey: 'id' });

export default DiscountRequest;
