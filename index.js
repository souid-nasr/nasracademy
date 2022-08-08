const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const courseRoute = require("./routes/courses")
const studentRoute = require("./routes/student");
const teacherRoute = require("./routes/teachers");
const answerRoute = require("./routes/answers")
const projectRoute = require("./routes/projects");
const contactRoute = require("./routes/contact");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected Successfully"))
  .catch((err) => {
    console.error(err);
  });


app.use(express.json());
app.use("/api/courses", courseRoute);
app.use("/api/students", studentRoute);
app.use("/api/teachers", teacherRoute);
app.use("/api/answers", answerRoute);
app.use("/api/projects", projectRoute);
app.use("/api/contact", contactRoute);


app.listen(8800, () => {
    console.log("Backend server is running!");
});