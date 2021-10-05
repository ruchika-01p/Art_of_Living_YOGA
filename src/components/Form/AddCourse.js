import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => addCourseStyle(theme));

const AddCourse = () => {
	const [courseName, setCourseName] = useState("");
	const [requirements, setRequirements] = useState("");
	const [description, setDescription] = useState("");
	const [link, setLink] = useState("");
	const [dateFrom, setDateFrom] = useState(new Date());
	const [dateTo, setDateTo] = useState(new Date());
	const [timeFrom, setTimeFrom] = useState(new Date());
	const [timeTo, setTimeTo] = useState(new Date());
	const [category, setCategory] = useState("");
	const [poster, setPoster] = useState(null);

	const classes = useStyles();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("poster", poster);
		const courseDetails = {
			courseName,
			requirements,
			description,
			link,
			dateFrom,
			dateTo,
			timeFrom,
			timeTo,
			category,
		};
		for (var key in courseDetails) {
			formData.append(key, courseDetails[key]);
		}
		Axios.post("http://localhost:5000/admin/addCourse", formData, {
			headers: {
				"x-auth-token": localStorage.getItem("user"),
			},
		})
			.then((res) => {
				console.log(res.data);
				Swal.fire("Good job!", "Course succesfully added", "success");
			})
			.catch((err) => {
				console.log(err.message);
				if (err.response) {
					Swal.fire("Log In Failed", err.response?.data?.message, "error");
				} else if (err.request) {
					Swal.fire("Log In Failed", "Internal Server Error", "error");
				} else {
					Swal.fire("Log In Failed", "Something went wrong", "error");
				}
			});
		clear();
		window.location = "/adult";
	};

	const clear = () => {
		setCourseName("");
		setRequirements("");
		setDescription("");
		setLink("");
		setDateFrom(new Date());
		setDateTo(new Date());
		setTimeFrom(new Date());
		setTimeTo(new Date());
		setCategory(new Date());
		setPoster(null);
	};

	return (
		<div className={classes.container}>
			<Grid component="main" md={6} sm={8} xs={12}>
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
								id="programName"
								name="programName"
								label="Name of Program/Course"
								fullWidth
								variant="outlined"
								value={courseName}
								onChange={(e) => setCourseName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								id="requirements"
								name="requirements"
								label="Requirements"
								fullWidth
								variant="outlined"
								value={requirements}
								onChange={(e) => setRequirements(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								multiline
								id="description"
								name="description"
								label="Description"
								fullWidth
								variant="outlined"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								id="link"
								required
								name="Link"
								label="Registration Link"
								fullWidth
								variant="outlined"
								value={link}
								onChange={(e) => setLink(e.target.value)}
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
											value={dateFrom}
											onChange={(date) => setDateFrom(date)}
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
											value={dateTo}
											onChange={(date) => setDateTo(date)}
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
											value={timeFrom}
											onChange={(time) => setTimeFrom(time)}
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
											value={timeTo}
											onChange={(time) => setTimeTo(time)}
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
											onChange={(e) => setCategory(e.target.value)}
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
											onChange={(e) => setPoster(e.target.files[0])}
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
										{poster &&
											`${poster.name} (${(poster.size / 1000).toFixed(2)} KB)`}
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
								Submit
							</Button>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
		</div>
	);
};

export default AddCourse;
