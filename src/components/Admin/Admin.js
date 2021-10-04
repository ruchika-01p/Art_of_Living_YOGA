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

const useStyles = makeStyles((theme) => adminStyles(theme));

const Admin = () => {
	const classes = useStyles();
	const [user, setUser] = useState({ username: "", password: "" });
	const [showPassword, setShowPassword] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post("http://localhost:5000/admin/login", user)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		console.log("object");
	};
	const handleMouseDownPassword = () => {
		showPassword ? setShowPassword(false) : setShowPassword(true);
	};

	return (
		<div className={classes.container}>
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
								onChange={(e) => setUser({ username: e.target.value })}
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
								onChange={(e) => setUser({ password: e.target.value })}
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
		</div>
	);
};

export default Admin;
