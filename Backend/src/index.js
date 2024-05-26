import express from 'express';
import connectToDatabase from './db.js';
import cardRoutes from './routes/cardRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
connectToDatabase();

app.use(express.json());
app.use('/api/cards', cardRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
