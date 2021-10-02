const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
	{
		courseName: { type: String, required: true },
		description: { type: String, required: true },
		requirements: { type: String, required: true },
		category: { type: String, required: true },
		link: { type: String, required: true },
		dateFrom: { type: String, required: true },
		dateTo: { type: String, required: true },
		timeFrom: { type: String, required: true },
		timeTo: { type: String, required: true },
		poster: {
			name: { type: String, required: true },
			path: { type: String, required: true },
			size: { type: String, required: true },
		},
	},
	{
		timestamps: true,
	}
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
