const { Schema, Types } = require('mongoose');

const fundSchema = new Schema({
  cost: {
    type: Number,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
}, {
  toJSON: {
    getters: true,
  },
  id: false,



});
module.exports = fundSchema;