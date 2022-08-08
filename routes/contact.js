const router = require("express").Router();
const ContactForm = require("../models/Contact");

router.post("/", async (req, res) => {
    const { name, email,subject,formBody } = req.body;
    try {

      contactForm = new ContactForm(req.body);

      await contactForm.save();
      res
        .status(200)
        .send({ msg: "Your message was sended successfully", contactForm });
    } catch (error) {
      res.status(500).send({ msg: "Server error" });
    }
  });
  //Get Forms
  router.get("/", async (req, res) => {
    try {
      let data = await ContactForm.find();
      res
        .status(200)
        .send({ msg: "Forms sended by students are :", data });
      if (!data) {
        res.status(400).send({ msg: "no document found", error });
      }
    } catch (error) {
      res.status(500).send({ msg: "Server error", error });
    }
  });
  //Delete Form
  router.delete("/:id", function (req, res) {
    const removedID = req.params.id;
    ContactForm.findByIdAndRemove(removedID)
      .then((result) => res.send(result))
      .catch((err) => res.status(500).send({ msg: "Server error", err }));
  });

module.exports = router;