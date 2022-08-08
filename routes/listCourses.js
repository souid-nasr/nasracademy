const router = require("express").Router();
const ListCourses = require("../models/ListCourses");
const VerifyTokenTeacher = require("../middlewares/verifyTokenTeacher");

//CREATE

router.post("/", async (req, res) => {

    const newListCourses = new ListCourses(req.body);
    try {
      const savedListCourses = await newListCourses.save();
      res.status(201).json(savedListCourses);
    } catch (err) {
      res.status(500).json(err);
    }

});

//DELETE

router.delete("/:id", VerifyTokenTeacher, async (req, res) => {

    try {
      await ListCourses.findByIdAndDelete(req.params.id);
      res.status(201).json("The ListCourses has been delete...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET

router.get("/find/:id",async (req, res) => {
  try {
    const listsCourse = await ListCourses.findById(req.params.id);
    res.status(200).json(listsCourse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random",async (req, res) => {
  let listCourses;
  try {
      listCourses = await ListCourses.aggregate([
        { $sample: { size: 1 } },
      ]);
    res.status(200).json(listCourses);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", async (req, res) => {
  try {
    let data = await ListCourses.find()
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

module.exports = router