const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    category: { type: String, default: "teacher"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);