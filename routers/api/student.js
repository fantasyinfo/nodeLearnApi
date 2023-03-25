const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const {
  getStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../../controller/api/student.js");

// get request /api/student/

router.get("/", getStudents);

// get student
router.get("/:id", getOneStudent);

// create student
router.post("/", createStudent);

// update student
router.put("/:id", updateStudent);

// delete student
router.delete("/:id", deleteStudent);

module.exports = router;
