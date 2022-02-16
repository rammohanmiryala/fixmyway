const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');


const commentSchema = new Schema({
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
    rating: {
        type: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    replies: [replySchema]
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

commentSchema.virtual("replayCount")
    .get(function () {
        return this.replies.length;
    });

    const Comment = model('Comment', commentSchema);

    module.exports = Comment;