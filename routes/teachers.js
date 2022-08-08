const Teacher = require("../models/Teacher");
const CryptoJS = require("crypto-js");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
//jsonwebtoken
const jwt = require("jsonwebtoken");
//validators
const {
  registerValidators,
  loginValidators,
  validator,
} = require("../middlewares/express-validator");

//7-require isAuth
const VerifyTokenTeacher = require("../middlewares/verifyTokenTeacher");
//@route /api/teachers/register
router.post("/register",registerValidators(),validator,async (req, res) => {
    const { username,email, password } = req.body;
    try {
      let teacher = await Teacher.findOne({ email });
      if (teacher) {
        return res.status(400).json({ msg: "Teacher already exists" });
      }
      teacher = new Teacher(req.body);
      //create salt
      const salt = 10; //recommended value
      //hash the password
      const hashedPassword = await bcrypt.hash(password, salt);
      //replace password with hashed password
      teacher.password = hashedPassword;
      //sign teacher
      const payload = {
        id: teacher._id,
      };
      //generate the token
      const teacherToken = await jwt.sign(
        payload,
        process.env.SECRET_KEY_TEACHER,

      );
      //save teacher
      await teacher.save();
      res
        .status(200)
        .send({ msg: "Teacher created successfully", teacher, teacherToken });
    } catch (error) {
      res.status(500).send({ msg: "Server error" });
    }
  }
);

//@route /api/teachers/login
router.post("/login", loginValidators(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    //test credentials
    //checking if teacher exists
    let teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(400).json({ msg: "Bad credentials" });
    }

    //checking password
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Bad credentials" });
    }
    //sign teacher
    const payload = {
      id: teacher._id,
    };
    //generate the token
    const teacherToken = await jwt.sign(
      payload,
      process.env.SECRET_KEY_TEACHER,
      {
        expiresIn: "10day",
      }
    );
    res
      .status(200)
      .send({ msg: "Teacher logged successfully", teacher, teacherToken });
  } catch (error) {
    res.status(500).send({ msg: "server error" });
  }
});
//@route /api/teachers/auth
//access private
router.get("/auth-teacher", VerifyTokenTeacher, (req, res) => {
  res.status(200).send({ teacher: req.teacher });
});

router.get("/all",async (req, res) => {
  try {
    let data = await Teacher.find();
    res.status(200).send({ msg: "List of all the teachers", data});
    if (!data) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});
//Edit a teacher profile
router.put("/:id", async (req, res) => {
  try {
    const teacherID = req.params.id;
    const update = req.body;
    const salt = 10; //recommended value
    if (req.body.password) {
      //hash the password
      const hashedUpdatedPassword = await bcrypt.hash(req.body.password, salt);
      //replace password with hashed password
      update.password = hashedUpdatedPassword;
    }
    let result = await Teacher.findByIdAndUpdate(teacherID, update, {
      new: true,
    });
    res
      .status(200)
      .send({ msg: "teacher account updated successfully", result });
  } catch (err) {
    res.status(500).send({ msg: "server error", err });
  }
});
//Delete a teacher profile
router.delete("/:id", function (req, res) {
  const removedID = req.params.id;
  Teacher.findByIdAndRemove(removedID)
    .then((result) =>
      res
        .status(200)
        .send({ msg: "teacher account deleted successfully", result })
    )
    .catch((err) => res.status(500).send({ msg: "server error", err }));
});
router.get("/:id", async (req, res) => {
  try {
    const findteacherID = req.params.id;
    let foundTeacher = await Teacher.findById(findteacherID)
    res
      .status(200)
      .send({ msg: "Found", foundTeacher });
    if (!foundTeacher) {
      res.status(400).send({ msg: "None found", error });
    }
  } catch (error) {
    res.status(500).send({ msg: "Server error", error });
  }
});

module.exports = router;