import {Card} from "../model/card.js";

export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createCard = async (req, res) => {
  const { title, subtitle, avatarUrl } = req.body;
  try {
    const newCard = await Card.create({ title, subtitle, avatarUrl });
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
