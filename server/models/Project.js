const {
  Schema,
  model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ProjectSchema = new Schema({
  PostCode: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    length: 6,
  },
  stateName: {
    type: String,
    unique: true,
    required: true,

  },
  cityName: {
    type: String,
    unique: true,
    required: true,

  },
  summary: {
    type: String,
    required: true,
    minlength: 15,
    maxlength: 20,
  },
  description: {
    type: String,
    required: true,
    minlength: 15,
    maxlength: 500,
  },
  cost: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  map: {
    data:Buffer,
    contentType:String,
  },
  problemimg:{
    data: Buffer,
    contentType: String,
  },
  progressImg:{
    data: Buffer,
    contentType: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  completedDate:{
    type: Date,
    get: (timestamp) => dateFormat(timestamp),

  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],

});

const Project = model('Project', ProjectSchema);

module.exports = Project;