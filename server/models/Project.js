const {
    Schema,
    model
} = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const commentSchema = require('./Comment');

const projectSchema = new Schema({
    projectTitle: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    projectDescription: {
        type: String,
        required: 'You need to leave a thought!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    projectAuthor: {
        type: String,
        
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        
    },
    comments: [commentSchema],
});

const Project = model('Project', projectSchema);

module.exports = Project;