const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const route = require("./routers/student.js");
const studentApiRoute = require("./routers/api/student.js");

const connection = require("./models/connectDB.js");
const TeacherModal = require("./models/TeacherModal.js");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/student/", studentApiRoute);

// inculding .env file

app.listen(PORT, () => {
  console.log(`Server is running on this url http://localhost:${PORT}`);
});
