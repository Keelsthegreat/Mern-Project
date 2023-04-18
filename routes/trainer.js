const express = require("express");
const Trainer = require("../models/trainers");
// const NewTrainer = require("../views/NewTrainer.jsx");
const router = express.Router();

router.get("/new", (req, res) => {
  console.log("hi");
  res.render("NewTrainer");
});

router.post("/", async (req, res) => {
  console.log(req);
  try {
    const { name, age, hometown, image } = req.body;
    const trainer = new Trainer({ name, age, hometown, image });
    const save = await trainer.save();
    console.log(save);
    res.redirect("/trainers/show");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/show", async (req, res) => {
  console.log("hi");
  // call mongo find() to get trainers
  const trainers = await Trainer.find();
  return res.render("TrainerDisplay", { trainers });
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Trainer.findByIdAndDelete(id);
    res.redirect("/trainers/show");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
