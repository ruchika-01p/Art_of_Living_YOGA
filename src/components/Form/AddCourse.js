import React, { useState, useEffect } from "react";
import "date-fns";
import {
	Grid,
	TextField,
	Typography,
	Paper,
	Button,
	FormControlLabel,
	RadioGroup,
	Radio,
	FormLabel,
	IconButton,
	makeStyles,
	Divider,
	Box,
	CircularProgress,
} from "@material-ui/core";
import DateFnsUtilsUtisl from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

import Axios from "axios";
import addCourseStyle from "./addCourseStyle";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => addCourseStyle(theme));

const AddCourse = (props) => {
	const classes = useStyles();
	const location = useLocation();
	const [update, setUpdate] = useState(false);
	const [loading, setLoading] = useState(true);
	const [course, setCourse] = useState({
		courseName: "",
		requirements: "",
		description: "",
		link: "",
		dateFrom: new Date(),
		dateTo: new Date(),
		timeFrom: new Date(),
		timeTo: new Date(),
		category: "",
		poster: "",
	});

	useEffect(() => {
		const id = location.pathname.split("/")[2];
		if (id && loading) {
			Axios.get(`http://localhost:5000/courses/${id}`, {
				headers: { "x-auth-token": localStorage.getItem("user") },
			})
				.then((res) => {
					if (res.data.success) {
						setCourse(state => ({
							...state,
							courseName: res.data?.course?.courseName,
							requirements: res.data?.course?.requirements,
							description: res.data?.course?.description,
							category: res.data?.course?.category,
							link: res.data?.course?.link,
							dateFrom: res.data?.course?.dateFrom,
							dateTo: res.data?.course?.dateTo,
							timeFrom: res.data?.course?.timeFrom,
							timeTo: res.data?.course?.timeTo,
							poster: res.data?.course?.poster,
						}));
						setLoading(false)
						setUpdate(true);
					}
				})
				.catch((err) => {
					console.log(err)
				});
		}
	}, [loading, course, location.pathname]);

	const handleSubmit = async (e) => {
		console.log(course.poster);
		e.preventDefault();
		const formData = new FormData();
		formData.append("poster", course.poster);
		for (var key in course) {
			if (key !== "poster") formData.append(key, course[key]);
		}
		const id = location.pathname.split("/")[2];
		const url = update
			? `http://localhost:5000/courses/${id}`
			: "http://localhost:5000/admin/addCourse";

		Axios.post(url, formData, {
			headers: {
				"x-auth-token": localStorage.getItem("user"),
			},
		})
			.then((res) => {
				console.log(res.data);
				Swal.fire({
					title: "Course added successfully",
					text: "Do you want to add more courses?",
					icon: "success",
					showDenyButton: true,
					showCancelButton: true,
					confirmButtonText: "Yes",
					denyButtonText: "No",
				}).then((result) => {
					if (result.isDenied) {
						clear();
						window.location = "/adult";
					}
				});
			})
			.catch((err) => {
				console.log(err.message);
				if (err.response) {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: err.response.message || "Something went wrong",
					});
				} else {
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "Something went wrong",
					});
				}
			});
	};

	const clear = () => {
		setCourse((course) => ({
			...course,
			courseName: "",
			requirements: "",
			description: "",
			link: "",
			dateFrom: new Date(),
			dateTo: new Date(),
			timeFrom: new Date(),
			timeTo: new Date(),
			category: "",
			poster: null,
		}));
	};

	return (
		<div className={classes.container}>
				<Grid item component="main" md={6} sm={8} xs={12}>
				<Paper
					component="form"
					onSubmit={(e) => handleSubmit(e)}
					variant="outlined"
					style={{ padding: "20px", flexGrow: "1" }}>
					<Typography
						style={{ margin: "10px 0" }}
						component="h1"
						variant="h4"
						align="center">
						Add a new course
					</Typography>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<TextField
								required
								InputLabelProps={{ shrink: true }}
								id="programName"
								name="programName"
								label="Name of Program/Course"
								fullWidth
								variant="outlined"
								value={course.courseName}
								onChange={(e) => setCourse({...course, courseName: e.target.value})}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								InputLabelProps={{ shrink: true }}
								id="requirements"
								name="requirements"
								label="Requirements"
								fullWidth
								variant="outlined"
								value={course.requirements}
								onChange={(e) =>
									setCourse({ ...course, requirements: e.target.value })
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								InputLabelProps={{ shrink: true }}
								multiline
								id="description"
								name="description"
								label="Description"
								fullWidth
								variant="outlined"
								value={course.description}
								onChange={(e) =>
									setCourse({ ...course, description: e.target.value })
								}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="link"
								required
								InputLabelProps={{ shrink: true }}
								name="Link"
								label="Registration Link"
								fullWidth
								variant="outlined"
								value={course.link}
								onChange={(e) => setCourse({ ...course, link: e.target.value })}
							/>
						</Grid>
						<Grid item xs={12}>
							<MuiPickersUtilsProvider utils={DateFnsUtilsUtisl}>
								<FormLabel component="legend">Select Date</FormLabel>
								<Grid container justify="space-between">
									<Grid item>
										<KeyboardDatePicker
											variant="outlined"
											format="dd/MM/yyy"
											margin="normal"
											id="date-picker1"
											label="From"
											value={course.dateFrom}
											onChange={(dateFrom) =>
												setCourse({ ...course, dateFrom })
											}
											KeyboardButtonProps={{
												"aria-label": "change date",
											}}
										/>
									</Grid>
									<Grid item>
										<KeyboardDatePicker
											variant="outlined"
											format="dd/MM/yyy"
											margin="normal"
											id="date-picker2"
											label="To"
											value={course.dateTo}
											onChange={(dateTo) =>
												setCourse({ ...course, dateTo })
											}
											KeyboardButtonProps={{
												"aria-label": "change date",
											}}
										/>
									</Grid>
								</Grid>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item xs={12}>
							<MuiPickersUtilsProvider utils={DateFnsUtilsUtisl}>
								<FormLabel component="legend">Select Time</FormLabel>
								<Grid container justify="space-between">
									<Grid item>
										<KeyboardTimePicker
											variant="outlined"
											margin="normal"
											id="time-picker2"
											label="From"
											value={course.timeFrom}
											onChange={(timeFrom) =>
												setCourse({ ...course, timeFrom })
											}
											KeyboardButtonProps={{
												"aria-label": "change time",
											}}
										/>
									</Grid>
									<Grid item>
										<KeyboardTimePicker
											variant="outlined"
											margin="normal"
											id="time-picker2"
											label="To"
											value={course.timeTo}
											onChange={(timeTo) =>
												setCourse({ ...course, timeTo })
											}
											KeyboardButtonProps={{
												"aria-label": "change time",
											}}
										/>
									</Grid>
								</Grid>
							</MuiPickersUtilsProvider>
						</Grid>
						<Grid item xs={12}>
							<Grid container justify="space-between" spacing={5}>
								<Grid item sm={5} xs={12}>
									<Grid container alignItems="center">
										<FormLabel component="legend">Select Category * </FormLabel>
										<RadioGroup
											row
											aria-label="position"
											onChange={(e) =>
												setCourse({ ...course, category: e.target.value })
											}
											name="position"
											justify="space-around"
											defaultValue="top">
											<FormControlLabel
												value="children"
												control={<Radio required color="primary" />}
												label="Children"
												labelPlacement="start"
											/>
											<FormControlLabel
												value="adult"
												control={<Radio required color="primary" />}
												label="Adult"
												labelPlacement="start"
											/>
										</RadioGroup>
									</Grid>
								</Grid>
								<Grid item sm={5} xs={12}>
									<Grid container alignItems="center">
										<FormLabel component="legend">Choose Poster: </FormLabel>
										<input
											required
											accept="image/*"
											className={classes.input}
											id="poster"
											type="file"
											onChange={(e) =>
												setCourse({ ...course, poster: e.target.files[0] })
											}
										/>
										<label htmlFor="poster">
											<IconButton
												color="primary"
												aria-label="upload picture"
												component="span">
												<PhotoCamera />
											</IconButton>
										</label>
									</Grid>
									<Grid>
										{course.poster &&
											`${course.poster.name} (${(
												course.poster.size / 1000
											).toFixed(2)} KB)`}
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Divider
						fullWidth
						style={{ margin: "10px -20px" }}
						variant="middle"
					/>
					<Grid
						container
						spacing={3}
						justify="space-evenly"
						style={{ marginTop: "10px" }}>
						<Grid item md={5} xs={12}>
							<Button
								color="primary"
								variant="contained"
								fullWidth
								onClick={() => clear()}>
								Clear
							</Button>
						</Grid>
						<Grid item md={5} xs={12}>
							<Button
								color="primary"
								variant="contained"
								fullWidth
								type="submit">
								{update ? "Update" : "Submit"}
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
};

export default AddCourse;
