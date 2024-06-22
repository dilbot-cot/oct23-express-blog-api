const express = require("express")
const app = express();

// Allows JSON to be used in all routes
app.use(express.json())

// Homepage route localhost:3000/
app.get("/", (request, response, next) => {

    response.json({
        message: "Hello world!"
    })
})

const blogRouter = require("./controllers/BlogRouter")
// Blogs route localhost:3000/blogs
// Uses the Blog Router script and allows GET POST and DELETE functions.
app.use("/blogs", blogRouter)

// No route option, when a route that doesn't exist is requested
app.get("*", (request, response, next) => {
    response.status(404).json({
        message: "Page not found."
    })
});

// How to handle an error with a request
app.use((error, request, response, next) => {
	response.status(error.status || 500).json({
		message: "Error occured!",
		error: error.message
	});
});

module.exports = {
    app
}