const mongoose = require("mongoose");

const ListCoursesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String },
    img: { type: String },
    content:{type:Array},
    creator:{type:String}
  },
  { timestamps: true }
);

module.exports = mongoose.model("ListCourses", ListCoursesSchema);