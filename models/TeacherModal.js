const mongoose = require("mongoose");

const TeacherShema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const TeacherModel = mongoose.model("TeacherModal", TeacherShema);

module.exports = TeacherModel;
