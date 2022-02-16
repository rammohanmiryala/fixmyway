const {
  Schema,
  model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ProjectSchema = new Schema({
  postCode: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
    length: 6,
  },
  stateName: {
    type: String,
    required: true,
  },
  districtName: {
    type: String,
    required: true,

  },
  streetAddress:{
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 250,
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
    trim: true,
  },
  map: {
    type: String,

  },
  problemimg: {
    type: String,

  },
  progressImg: {
    type: String,

  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  completedDate: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),

  },
  categories: {
    type: Schema.Types.ObjectId,
    type: Number,
    ref: 'Category',
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    }
  ]


});

const Project = model('Project', ProjectSchema);

module.exports = Project;