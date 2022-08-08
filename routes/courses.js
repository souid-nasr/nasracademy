const router = require("express").Router();
const Course = require("../models/Course");
const VerifyTokenTeacher = require("../middlewares/verifyTokenTeacher");

//CREATE

router.post("/", async (req, res) => {
  const {title,desc,img,content,creator}=req.body
    try {
      newCourse = new Course(req.body);

      await newCourse.save();
      res
        .status(200)
        .send({ msg: "Your message was sended successfully", newCourse });
    } catch (error) {
      res.status(500).send({ msg: "Server error" });
    }
  });
//UPDATE

router.put("/:id", async (req, res) => {
    try {
      const updatedCourse = await Course.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCourse);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id",async (req, res) => {
    try {
      await Course.findByIdAndDelete(req.params.id);
      res.status(200).json("The Course has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET

router.get("/find/:id",async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random", async (req, res) => {
  let course;
  try {
      course = await Course.aggregate([
        { $sample: { size: 1 } },
      ]);
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", async (req, res) => {
  try {
    let data = await Course.find()
    res
      .status(200)
      .send({ msg: "All courses", data });
    if (!data) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});

module.exports = router;