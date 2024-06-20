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
        type: String, // to be replaced with mongoose object ID
        required: true
    },
    like: {
        type: [String], // to be replaced with a mongoose object ID
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