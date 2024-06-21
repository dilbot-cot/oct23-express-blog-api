/**
- Title
- Content
- User (posted by)
- Created date
- Like 
- Image upload 
- Category/Tags/keywords 
- Audit history
    - user 
    - timestamp 
 */

const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        required: true
    },
    like: {
        type: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
        required: false
    },
    headerImage: {
        type: String,
        required: false
    },
    tags: {
        type: [String],
        required: false
    },
    categories: {
        type: [String],
        enum: ["life", "travel", "photography", "coding"],
        required: true
    },
    editHistory: {
        type: [{
            user: String, 
            timestamp: Date
        }],
        required: false
    }
},
{
    timestamps: true
})

const BlogModel = mongoose.model("Blog", blogSchema)

module.exports = {BlogModel}