import pool from '../dbConfig.js';
import Card from '../model/card.js';

// Obter todos os cartões de descontos
export const getAllCards = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cardsDiscounts');
    const cards = result.rows;
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Adicionar um novo cartão de descontos
export const createCard = async (req, res) => {
  const { title, subtitle, avatarUrl } = req.body;
  const newCard = new Card(title, subtitle, avatarUrl);

  try {
    await pool.query('INSERT INTO cardsDiscounts (title, subtitle, avatarUrl) VALUES ($1, $2, $3)', [title, subtitle, avatarUrl]);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
