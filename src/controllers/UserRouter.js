const express = require("express");
const router = express.Router();
const {UserModel} = require("../models/models")

router.get("/", async (request, response, next) => {

	let result = await UserModel.find({}).exec();

	response.json({
		message:"User router homepage",
		result: result
	});
});


router.get("/findById/:id", async (request, response, next) => {

	let result = await UserModel.findById(request.params.id).exec();

	response.json({
		message:"User router found page",
		result: result
	});
});

router.post("/findOneQuery", async (request, response, next) => {

	let result = await UserModel.findOne(request.body).exec();

	response.json({
		message:"User router homepage",
		result: result
	});
});

router.post("/", async (request, response, next) => {

	let result = await UserModel.create(request.body).catch(error => {
		error.status = 400;
		return error
	});

	if (result.errors) {
		return next(result);
	}

	response.json({
		message:"User router homepage",
		result: result
	});
});

router.patch("/findById/:id", async (request, response, next) => {

	let result = await UserModel.findByIdAndUpdate(
		request.params.id, 
		request.body,
		{
			returnDocument: "after"
		}
	);

	response.json({
		message:"User router homepage",
		result: result
	});
});

router.delete("/", async (request, response, next) => {

	let result = await UserModel.findByIdAndDelete(request.body.id);

	response.json({
		message:"User router homepage",
		result: result
	});
});

module.exports = router;