const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path")

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));


const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const cardsRouter = require("./routes/cards");
const childRouter = require("./routes/child");
const courseRouter = require("./routes/course");

app.use("/", courseRouter);
app.use("/adult", cardsRouter);
app.use("/children", childRouter);

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
