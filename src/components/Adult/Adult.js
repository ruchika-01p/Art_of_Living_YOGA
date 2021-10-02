import React, { useState, useEffect } from "react";
import "./Adult.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import image1 from "../../images/WITfivicon.png";
import logo from "../../images/LOGO1.svg";
import course1 from "../../images/course1.jpeg";
import course2 from "../../images/course2.jpeg";
import { LocalGroceryStore, LocalGroceryStoreSharp } from "@material-ui/icons";
import Axios from "axios";
import { Grid } from "@material-ui/core";

const content = [
	{
		image: course1,
		text: "Meditation and Breath Workshop",
		para: "Learn most effective and profound breathing technique ‘Sudarshan Kriya’ Boost immunity and freedom from stress",
		para1: "24 - 27 June, 6:30 to 8:30am",
		link: "http://aolt.in/558208",
	},
	{
		image: course2,
		text: "Sri Sri Yoga Classes",
		para: "Energize, and integrate your mind, body, and spirit Improve self-awareness, health, and flexibility Get stronger and grounded with yoga poses",
		para1: "6:45am to 7:45am",
		link: "http://aolt.in/570699",
	},
	{
		image: logo,
		text: "Online Medha Yoga",
		para: "Regularize your practise Energize, and integrate your mind, body, and spirit.Freedom from stress",
		para1: "",
		link: "http://aolt.in/571408",
	},
	// {
	//     image: logo,
	//     text: 'The Wellness Program',
	//     para: 'Wellness simply means blossoming in life in all dimensions - being happy, at ease with yourself and with those around you. The Wellness Program is a perfect balance of Yoga, Ayurveda and Knowledge. The program nudges your attitude from ‘disease’ to ‘health’.',
	//     link:"https://drive.google.com/file/d/1rdpuqSxEMNw-FW0wrcMxnOjiF1richVl/view?usp=sharing",
	// },
	// {
	//     image: logo,
	//     text: 'Free Covid Care Programs',
	//     para: 'Immunity Enhancement Program with Meditation, Breath &amp; Yoga A free 3-day program to help you strengthen your immunity.Covid Care Support with meditation, breath &amp; yoga A free 3-day program for Covid patients to help build strength and recover faster.Post-Covid rehabilitation with Meditation, Breath, and Yoga A free 3-day program for speedy recovery after testing negative.',
	//     link:"",
	// },
];
const content1 = [
	{
		image: logo,
		text: "Sri Sri Sanskar Kendra",
		para: "Enrich your children with human values and create an appreciation for traditions by way of shlokas, inspirational stories, chants, fun-activities and much more",
		para1: "12 June to 4 July 2021, 5:00pm to 6:00pm",
		link: "https://sssk.vvmvp.org/home/course/sri-sri-sanskar-kendra-online-module-m1-a/718",
	},
];

function Adult() {
	const [adultCourse, setAdultCourse] = useState([]);
	const [childCourse, setChildCourse] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:5000/courses").then((res) => {
			console.log(res.data.courses);
			const adult = res.data.courses.filter((el) => el.category === "adult");
			const children = res.data.courses.filter((el) => el.category !== "adult");
			console.log(adult, children);

			if (adult && adult.length > 0) {
				adult.forEach((item) => {
					content.push({
						image: `http://localhost:5000/${item.poster.path}`,
						text: item.courseName,
						para: item.description,
						para1: `${new Date(
							item.dateFrom
						).toDateString()} - ${new Date(
							item.dateTo
						).toDateString()} | ${new Date(
							item.timeFrom
						).toLocaleTimeString()} - ${new Date(item.timeTo).toLocaleTimeString()}`,
						link: item.link,
					});
					console.log(item);
				});
				setAdultCourse(content);
			}
			if (children && children.length > 0) {
				children.forEach((item) => {
					content1.push({
						image: `http://localhost:5000/${item.poster.path}`,
						text: item.courseName,
						para: item.description,
						para1: `${new Date(
							item.dateFrom
						).toDateString()} - ${new Date(
							item.dateTo
						).toDateString()} \n ${new Date(
							item.timeFrom
						).toLocaleTimeString()} - ${new Date(item.timeTo).toLocaleTimeString()}`,
						link: item.link,
					});
					console.log(item);
				});
				setChildCourse(content1);
			}
		});
	}, []);

	return (
		<div>
			<h2 style={{ fontFamily: "Open Sans Condensed" }}>
				<center>Courses for 18+</center>
			</h2>
			<br />
			<div className="containerr1">
				{adultCourse.map((a, i) => (
					<div className="cards-wrapper">
						<div className="card2">
							<CardActionArea>
								<CardMedia className="media" image={a.image} />
								<CardContent>
									<Typography gutterBottom variant="h7" component="h2">
										{a.text}
									</Typography>
									<Typography
										className="hola"
										variant="body2"
										color="black"
										component="p">
										{a.para}
									</Typography>
									<Typography gutterBottom variant="h7" component="h3">
										{a.para1}
									</Typography>
									<a href={a.link} target="_blank">
										<b>
											<h3>Registration Link</h3>
										</b>
									</a>
								</CardContent>
							</CardActionArea>
						</div>
					</div>
				))}
			</div>
			<h2 style={{ fontFamily: "Open Sans Condensed" }}>
				<center>Courses for Children</center>
			</h2>
			<br />
			<div className="containerr1">
				{childCourse.map((a, i) => (
					<div className="cards-wrapper">
						<div className="card2">
							<CardActionArea>
								<CardMedia className="media" image={a.image} />
								<CardContent>
									<Typography gutterBottom variant="h7" component="h2">
										{a.text}
									</Typography>
									<Typography
										className="hola"
										variant="body2"
										color="black"
										component="p">
										{a.para}
									</Typography>
									<Typography gutterBottom variant="h7" component="h3">
										{a.para1}
									</Typography>
									<a href={a.link} target="_blank">
										<b>
											<h3>Registration Link</h3>
										</b>
									</a>
								</CardContent>
							</CardActionArea>
						</div>
					</div>
				))}
			</div>
			<Grid container justify="center" xs={12}>
				<Grid item sm={3} xs={10}>
					<Button
						color="primary"
						variant="contained"
						fullWidth
						href="/addCourse">
						Add new course
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}

export default Adult;
