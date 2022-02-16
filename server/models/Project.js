const {
  Schema,
  model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const fundSchema = require('./Fund');
const commentsSchema = require('./Comment');

const projectSchema = new Schema({
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
  comments:[commentsSchema],
  funding:[fundSchema]

}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

projectSchema.virtual("fundingCount")
  .get(function () {
    return this.funding.length;
  });
  projectSchema.virtual("commentCount")
  .get(function () {
    return this.comment.length;
  });



const Project = model('Project', projectSchema);

module.exports = Project;




