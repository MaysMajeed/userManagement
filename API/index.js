const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routes");
const cors = require("cors");

dotenv.config();
app.use(cors());

mongoose.connect(process.env.MongoURL);
app.use(express.json());

app.use("/api", userRouter);

app.listen(3009, () => {
  console.log("connected to port 3009");
});
