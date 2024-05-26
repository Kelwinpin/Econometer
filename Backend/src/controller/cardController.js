import Card from '../model/card.js';

// Obter todos os cartões de descontos
export const getAllCards = async (req, res) => {
  try {
    const cardsDiscounts = await Card.find();
    res.json(cardsDiscounts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Adicionar um novo cartão de descontos
export const createCard = async (req, res) => {
  const { title, subtitle, avatarUrl } = req.body;
  const newCard = new Card({ title, subtitle, avatarUrl });

  try {
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
