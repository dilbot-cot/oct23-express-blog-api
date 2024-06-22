/**
 * User ID
 * Comment content
 * Like
 */
const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    author:{
        type: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        required: true
    },
    content: {
        type: String,
        required: trusted
    },
    likes: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        required: false
    }
})

module.exports = {commentSchema}