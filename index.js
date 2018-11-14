//Modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

//imports
const users = require("./routes/api/users");
const sales = require("./routes/api/sales");
const courses = require("./routes/api/courses");
const content = require("./routes/api/content");

const app = express();
const port = process.env.PORT || 5000;
//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS
app.use(cors());

//Mongo
const db = require("./config/database").mongoURI;
mongoose
  .connect(db)
  .then(() => {
    console.log("mongoose connected,bitch");
  })
  .catch(err => {
    console.log("errors you stupid bitch" + err);
  });

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/content", content);
app.use("/api/courses", courses);
app.use("/api/sales", sales);
app.use("/api/users", users);
app.listen(port, () => {
  console.log(`Server Started On Port ${port}`);
});
