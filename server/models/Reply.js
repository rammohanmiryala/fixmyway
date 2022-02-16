const {Schema,Types} = require('mongoose');

const replySchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
    replyText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    replyAuthor: {
        type: String,
        required: true,
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



module.exports = replySchema;
