import express from 'express';
import sequelize from './config/sequelize.config.js';
import cardRoutes from './routes/cardRoutes.js';
import userRoutes from './routes/usersRoutes.js' 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/cards', cardRoutes);
app.use('/', userRoutes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});


sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
