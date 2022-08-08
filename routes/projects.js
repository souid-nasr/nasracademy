const router = require("express").Router();
const Project = require("../models/Project");
const VerifyTokenTeacher = require("../middlewares/verifyTokenTeacher");

//CREATE

router.post("/", async (req, res) => {

    const newProject = new Project(req.body);
    try {
      const savedProject = await newProject.save();
      res.status(201).json(savedProject);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE

router.put("/:id", async (req, res) => {

    try {
      const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProject);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", async (req, res) => {

    try {
      await Project.findByIdAndDelete(req.params.id);
      res.status(200).json("The Project has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET

router.get("/find/:id",async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random",async (req, res) => {
  let Project;
  try {
      project = await Project.aggregate([
        { $sample: { size: 1 } },
      ]);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", async (req, res) => {
  try {
    let data = await Project.find()
    res
      .status(200)
      .send({ msg: "All Projects", data });
    if (!data) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});

module.exports = router;