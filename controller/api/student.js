const TeacherModal = require("../../models/TeacherModal.js");

let students = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 25,
    planets: ["Earth", "Moon", "Mars"],
  },
  {
    id: 2,
    firstName: "Sattu",
    lastName: "Bhau",
    age: 18,
    status: ["UP", "MP", "DELHI"],
  },
  {
    id: 3,
    firstName: "Sweaty",
    lastName: "Sharma",
    age: 30,
    country: ["India", "America", "Australia"],
  },
];

const getStudents = async (req, res) => {
  let allStudents = await TeacherModal.find();

  if (allStudents) {
    return res
      .status(200)
      .json({ message: "Students Lists...", studentsLists: allStudents });
  } else {
    return res.status(400).json({
      message: `Users Not Found.`,
      student,
    });
  }
};

const getOneStudent = async (req, res) => {
  let student = await TeacherModal.findById(req.params.id);

  // console.log(student);
  if (!student) {
    return res.status(400).json({
      message: `User Not Found. ${req.params.id}`,
    });
  } else {
    return res.status(200).json({
      message: `Getting the data with this id ${req.params.id}`,
      student,
    });
  }
};

const createStudent = async (req, res) => {
  let studentData = req.body;

  await TeacherModal(studentData).save((err, db) => {
    if (err) console.log("Error saving the student to DB.", err);
  });

  let studentFromDB = await TeacherModal.find({ email: studentData.email });
  // console.log("Student Creating Done Api is working.");
  return res
    .status(201)
    .json({ message: "Student Created.", data: studentFromDB });
};

const updateStudent = async (req, res) => {
  if (!req.params.id)
    return res.status(400).json({ message: "Please add id field." });

  if (req.params.id) {
    let updateStudent = await TeacherModal.updateOne(
      { _id: req.params.id },
      req.body
    );

    if (updateStudent) {
      res.status(200).json({
        message: `Data updated with this id ${req.params.id} ${updateStudent}`,
      });
    } else {
      res
        .status(400)
        .json({ message: `Data not updated for this id ${req.params.id}` });
    }
  } else {
    res
      .status(400)
      .json({ message: `Student Not found with this id ${req.params.id}` });
  }
};

const deleteStudent = async (req, res) => {
  let student = await TeacherModal.deleteOne({ _id: req.params.id });

  if (student) {
    res
      .status(200)
      .json({ message: `Data deleted with this id ${req.params.id}` });
  } else {
    res.status(400).json({ message: "Student Not Deleted." });
  }
};

module.exports = {
  getStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
