const router = require("express").Router();
const multer = require("multer");
const Course = require("../models/course.model");
const upload = require("../middlewares/upload");

router.post("/admin/addCourse", (req, res) => {
	upload(req, res, (err) => {
		if (err instanceof multer.MulterError) {
			return res.status(500).json(err);
		} else if (err) {
			return res.status(500).json(err);
		}
		const poster = req.file;
		const courseDetails = req.body;

		console.log(poster, courseDetails);
		const newCourse = new Course({
			courseName: courseDetails.courseName,
			description: courseDetails.description,
			category: courseDetails.category,
			requirements: courseDetails.requirements,
			link: courseDetails.link,
			dateFrom: courseDetails.dateFrom,
			dateTo: courseDetails.dateTo,
			timeFrom: courseDetails.timeFrom,
			timeTo: courseDetails.timeTo,
			poster: {
				name: poster.filename,
				path: poster.path,
				size: poster.size.toString(),
			},
		});

		newCourse
			.save()
			.then(() =>
				res
					.status(201)
					.json({ success: true, message: "Course added succesfully!" })
			)
			.catch((err) => res.status(400).json({ success: false, message: err }));
	});
});

router.get("/courses", (req, res) => {
	Course.find({})
		.then((courses) => res.status(200).json({ success: true, courses }))
		.catch((err) => res.status(400).json({ success: false, message: err }));
});

module.exports = router;
