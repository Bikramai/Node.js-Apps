const Debug = require("debug")("app:startup");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const Joi = require("joi");
const logger = require("./middleware/logger");
const auth = require("./auth");
const courses = require("./routes.courses");
const router = require("./routes.home");
const express = require("express");
const app = express();

app.set("view engine", "pug");
app.set("views", "./views"); // default value and optional if you want to overwrite the views

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  Debug("Morgan enabled..."); // console.log()
}

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password: " + config.get("mail.password"));

app.use(logger);

app.use(auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port port ${port}...`));
