const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const conversationRouter = require("./routes/conversationRoutes");
const messageRouter = require("./routes/messageRoutes");
const fileRouter = require("./routes/fileRoutes");

// creating express app
const app = express();

//Parsing url
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// allowing cross origin
app.use(cors({ credentials: true }));

// connecting database
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then((con) => {
  console.log("DB connection successful");
});

// routes

app.use("/user", userRouter);
app.use("/conversation", conversationRouter);
app.use("/message", messageRouter);
app.use("/file", fileRouter);

// starting the server
app.listen(process.env.PORT, () => {
  console.log("server is running successfully on port:", process.env.PORT);
});
