import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import Establishment from './establishment'; // Importe o modelo Establishment

const DiscountPattern = sequelize.define('DiscountPattern', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rule: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    discount_type: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    discount_value: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    discount_percentage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    establishment_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'discount_pattern',
    timestamps: false
});

DiscountPattern.belongsTo(Establishment, { foreignKey: 'establishment_id', targetKey: 'id' });

export default DiscountPattern;
