import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';
import {Establishment} from './establishment.js';

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
        allowNull: false,
        references: {
            model: 'establishment',
            key: 'id'
        }
    }
}, {
    tableName: 'discount_patterns',
    timestamps: false
});

DiscountPattern.belongsTo(Establishment, { foreignKey: 'establishment_id', targetKey: 'id' });

export default DiscountPattern;
