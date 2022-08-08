const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    category: { type: String, default: "student",required: true, },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);