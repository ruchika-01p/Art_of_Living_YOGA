import React, { useState, useEffect } from "react";
import adminStyles from "./adminStyles";
import { makeStyles } from "@material-ui/core/styles";
import {
	Grid,
	Paper,
	Typography,
	TextField,
	Button,
	Avatar,
	InputAdornment,
	IconButton,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Axios from "axios";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => adminStyles(theme));

const Admin = () => {
	const history = useHistory();
	const classes = useStyles();
	const [user, setUser] = useState({ username: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);
	const [auth, setAuth] = useState(true);

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post("http://localhost:5000/admin/login", user)
			.then((res) => {
				if (res.data.success) {
					Swal.fire({
						position: "center",
						icon: "success",
						title: "Succesfully logged in",
						showConfirmButton: false,
						timer: 1500,
					});
					localStorage.setItem("user", res.data.user);
					history.push("/");
				}
				console.log(res);
			})
			.catch((err) => {
				if (err.response) {
					Swal.fire("Log In Failed", err.response?.data?.message, "error");
				} else if (err.request) {
					Swal.fire("Log In Failed", "Internal Server Error", "error");
				} else {
					Swal.fire("Log In Failed", "Something went wrong", "error");
				}
			});
	};
	const handleMouseDownPassword = () => {
		showPassword ? setShowPassword(false) : setShowPassword(true);
	};

	useEffect(() => {
		const token = localStorage.getItem("user");
		if (token) {
			Axios.get("http://localhost:5000/admin/authCheck", {
				headers: {
					"x-auth-token": token,
				},
			})
				.then((res) => {
					console.log(res);
					if (res.data.success) {
						Swal.fire({
							position: "center",
							icon: "success",
							title: "Already logged in",
							showConfirmButton: true,
							timer: 1500,
						});
						history.push("/");
					}
				})
				.catch((err) => setAuth(false));
		}
	}, [history]);

	return (
		<div className={classes.container}>
			{!auth && (
				<Grid component="main" md={3} sm={7} xs={10}>
					<Paper
						component="form"
						onSubmit={(e) => handleSubmit(e)}
						variant="outlined"
						style={{ padding: "20px", flexGrow: "1" }}>
						<Grid align="center" container>
							<Grid item xs={12}>
								<Avatar className={classes.avatar}>
									<AccountCircleIcon className={classes.icon} />
								</Avatar>
							</Grid>
							<Grid item xs={12}>
								<Typography
									style={{ margin: "10px 0" }}
									component="h2"
									variant="h5"
									align="center">
									Admin Login
								</Typography>
							</Grid>
						</Grid>
						<Grid container justify="center" spacing={3}>
							<Grid item xs={12}>
								<TextField
									required
									id="username"
									name="username"
									InputLabelProps={{ shrink: true }}
									label="Useranme"
									fullWidth
									variant="outlined"
									value={user.username}
									onChange={(e) =>
										setUser({ ...user, username: e.target.value })
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									InputLabelProps={{ shrink: true }}
									label="Password"
									fullWidth
									variant="outlined"
									value={user.password}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onMouseDown={handleMouseDownPassword}>
													{showPassword ? <Visibility /> : <VisibilityOff />}
												</IconButton>
											</InputAdornment>
										),
									}}
									onChange={(e) =>
										setUser({ ...user, password: e.target.value })
									}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									color="primary"
									variant="contained"
									fullWidth
									size="large"
									type="submit">
									Submit
								</Button>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			)}
		</div>
	);
};

export default Admin;
