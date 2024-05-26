import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('econometer_db', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
