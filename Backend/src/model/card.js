import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String
  }
});

const Card = mongoose.model('Card', cardSchema);
export default Card;
