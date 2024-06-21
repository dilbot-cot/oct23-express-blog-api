/**
 * username
 * blog post view history
 */

const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: trusted
    },
    viewHistory: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog"}],
        required: false,
        unique: false
    }
})

const userModel = mongoose.model("User", userSchema)

module.exports = {userModel}