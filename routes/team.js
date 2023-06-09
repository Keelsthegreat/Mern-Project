const express = require("express");
const Team = require("../models/team");
const Trainer = require("../models/trainers");

const router = express.Router();

router.get("/new", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    console.log({ trainers });
    res.render("NewTeam", { trainers });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, description, trainer, image } = req.body;
    const team = new Team({ name, description, trainer, image });
    const savedTeam = await team.save();
    console.log(savedTeam);
    res.redirect("/teams/show");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
router.get("/show", async (req, res) => {
  try {
    const teams = await Team.find();
    // console.log("Team data:", teams);
    res.render("TeamDisplay", { teams });
  } catch {
    console.error(error);
    res.status(500).send("Server Error: Unable to find 'Teams'");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Team.findByIdAndDelete(id);
    res.redirect("/teams/show");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.get('/:id/edit', async (req, res) => {
  try {
    const {id} = req.params;

    const team = await Team.findById(id);
        
    res.render("EditTeam", {team})
  } catch (error) {
    console.error(error);
    res.status(404).send('Trainer not found');
  }
});

router.put('/:id/edit', async (req, res) => {
  try {
    const {id} = req.params;
    if (req.body){

      const {name, description , trainers, image } = req.body;
      const team = await Team.findByIdAndUpdate(id, {name, description, trainers, image});
      res.redirect('/teams/show')
    }else {
      return 
    }
    
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
})


module.exports = router;
