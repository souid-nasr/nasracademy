const router = require("express").Router();
const Answer = require("../models/Answer");
const VerifyTokenStudent = require("../middlewares/verifyTokenStudent");


//CREATE

router.post("/", async (req, res) => {
    const newAnswer = new Answer(req.body);
    try {
      const savedAnswer = await newAnswer.save();
      res.status(201).json(savedAnswer);
    } catch (err) {
      res.status(500).json(err);
    }
  
});

//UPDATE

router.put("/:id", async (req, res) => {

    try {
      const updatedAnswer = await Answer.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedAnswer);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE

router.delete("/:id", async (req, res) => {

    try {
      await Answer.findByIdAndDelete(req.params.id);
      res.status(200).json("The Answer has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
});

//GET

router.get("/find/:id", async (req, res) => {
  try {
    const answer = await Answer.findById(req.params.id);
    res.status(200).json(answer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET RANDOM

router.get("/random", async (req, res) => {
  let Answer;
  try {
      Answer = await Answer.aggregate([
        { $sample: { size: 1 } },
      ]);
    res.status(200).json(Answer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL

router.get("/", async (req, res) => {
  try {
    let data = await Answer.find()
    res
      .status(200)
      .send({ msg: "All Answers", data });
    if (!data) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});


module.exports = router;