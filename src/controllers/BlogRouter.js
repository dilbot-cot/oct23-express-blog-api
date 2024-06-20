const express = require("express")
const router = express.Router();

router.get("/", (request, response, next) => {
    response.json({
        message: "Blog router homepage"
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