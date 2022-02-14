const {
  Schema,
  model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const DonateSchema = new Schema({
  cost: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  
});

const Donate = model('Donate', DonateSchema);

module.exports = Donate;