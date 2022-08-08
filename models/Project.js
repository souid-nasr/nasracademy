const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    about: { type: String},
    title: { type: String, required: true},
    desc: { type: String, required: true},
    creator: { type: String}
  },
  
);

module.exports = mongoose.model("Project", ProjectSchema);