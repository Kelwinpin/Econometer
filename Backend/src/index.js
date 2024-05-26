import express from 'express';
import sequelize from './config/sequelize.config.js';
import cardRoutes from './routes/cardRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/cards', cardRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sincronize os modelos com o banco de dados
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
