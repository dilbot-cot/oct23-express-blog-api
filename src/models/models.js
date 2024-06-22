const mongoose = require("mongoose");
const { blogSchema } = require("../schemas/BlogSchema");
const { userSchema } = require("../schemas/UserSchema");

const BlogModel = mongoose.model("Blog", blogSchema)
const UserModel = mongoose.model("User", userSchema)

module.exports = {
    BlogModel,
    UserModel
}