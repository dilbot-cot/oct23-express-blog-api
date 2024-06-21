const express = require("express");
const { BlogModel } = require("../models/BlogModel");
const router = express.Router();

// Find all blogs - 
router.get("/", async (request, response, next) => {

    let result = await BlogModel.find({}).exec();
    response.json({
        message: "Blog router homepage",
        result: result
    })
})

router.get("/:id", (request, response, next) => {
    response.json({
        message: "Blog router page"
    })
})

router.post("/", (request, response, next) => {
    response.json({
        message: "Blog router post"
    })
})

router.delete("/", (request, response, next) => {
    response.json({
        message: "Blog router delete"
    })
})

module.exports = router