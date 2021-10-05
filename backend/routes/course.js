const router = require("express").Router();
const isAuth = require("../middlewares/isAuth");
const multer = require("multer");
const Course = require("../models/course.model");
const upload = require("../middlewares/upload");
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const fs = require("fs");

//Create an admin
// router.post("/admin/register", (req, res) => {
// 	const { username, password, password2 } = req.body;
// 	if (!username || !password || !password2)
// 		return res.status(400).json({ success: false, message: "All the fields are required" });

// 	if (password !== password2)
// 		return res.status(400).json({ success: false, message: "Passwords do not match" });

// 	User.find({}).then((user) => {
// 			if (user && user.length > 0)
// 				return res.status(400).json({ success: false, message: "Admin already exists" });

// 			bcrypt.genSalt(10, function (err, salt) {
// 				if (err)
// 					return res.status(400).json({ success: false, message: err.message });

// 				bcrypt.hash(password, salt, function (err, hashedPassword) {
// 					if (err)
// 						return res.status(400).json({ success: false, message: err.message });

// 					User.create({ username, password: hashedPassword }, function (err, doc) {
// 						if (err)
// 							res.status(400).json({ success: false, message: err.message });
// 						return res.status(201).json({ success: true });
// 					});
// 				});
// 			});
// 		})
// 		.catch((err) =>
// 			res.status(400).json({ success: false, message: err.message })
// 		);
// });

router.post("/admin/login", (req, res) => {
	console.log(req.body);
	const { username, password } = req.body;
	User.findOne({ username })
		.then((user) => {
			if (!user)
				return res
					.status(404)
					.json({ success: false, message: "User not found" });

			bcrypt.compare(password, user.password, (err, isValidPassword) => {
				if (err)
					return res
						.status(400)
						.json({ success: false, message: "Invalid Credentials" });
				if (!isValidPassword)
					return res
						.status(400)
						.json({ success: false, message: "Invalid credentials" });
				const token = jwt.sign(
					{ username: user.username },
					process.env === "production" ? process.env.JWT_SECRERT : "123",
					{ expiresIn: "1d" }
				);

				return res.json({ success: true, user: token });
			});
		})
		.catch((err) =>
			res.status(400).json({ success: false, message: err.message })
		);
});

router.get("/admin/authCheck", isAuth, (req, res) => {
	if (!req.user)
		return res.status(403).json({ success: false, message: "Access Denied" });
	res.status(200).json({ success: true });
});

router.post("/admin/addCourse", isAuth, (req, res) => {
	console.log(req);
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

router.delete("/courses/:id", isAuth, (req, res) => {
	const id = mongoose.Types.ObjectId(req.params.id);
	console.log(id);
	Course.findById(id)
		.then((course) => {
			if (!course)
				return res
					.status(400)
					.json({ success: false, message: "Course not found" });

			fs.unlink("./uploads/" + course.poster.name, (err) => {
				if (err)
					return res.status(500).json({ scucces: false, message: err.message });
				course
					.deleteOne({ _id: id })
					.then((result) =>
						res
							.status(200)
							.json({ success: true, message: "Course deleted succesfully!" })
					)
					.catch((err) =>
						res.status(400).json({ success: false, message: err.message })
					);
			});
		})
		.catch((err) =>
			res.status(400).json({ success: false, message: err.message })
		);
});

module.exports = router;
