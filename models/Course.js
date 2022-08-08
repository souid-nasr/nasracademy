const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    content: { type: String },
    creator:{ type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", CourseSchema);