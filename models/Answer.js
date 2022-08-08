const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema(
  {
  username: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
  },
  title:{
      type: String,
      required: true,
  },
  url:{
      type: String,
      required: true,

  }
  },
  
);

module.exports = mongoose.model("Answer", AnswerSchema)