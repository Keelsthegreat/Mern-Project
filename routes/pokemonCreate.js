const express = require('express')
const Pokemon = require('../models/pokemon')

const router = express.Router()

router.get("/new", async (req, res) => {
    try {
      const pokemon = await Pokemon.find();
      // console.log({ trainers });
      res.render("NewPokemon", { pokemon });
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  });
  
  router.post("/", async (req, res) => {
    console.log(req);
    try {
      const { name, image, level, types } = req.body;
      const pokemon = new Pokemon({ name, image, level, types });
      const save = await pokemon.save();
      console.log(save);
      res.redirect("/pokemoncreate/show");
    } catch (error) {
      console.error(error);
      res.status(500).send("Server error");
    }
  });
  
  router.get("/show", async (req, res) => {
    console.log("hi");
    // call mongo find() to get trainers
    const pokemon = await Pokemon.find();
    return res.render("PokemonDisplay", { pokemon });
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await Pokemon.findByIdAndDelete(id);
      res.redirect("/pokemoncreate/show");
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  });
  
  router.get('/:id/edit', async (req, res) => {
    try {
      const {id} = req.params;
  
      const pokemon = await Pokemon.findById(id);
          
       res.render("EditPokemon", {pokemon})
    } catch (error) {
      console.error(error);
      res.status(404).send('Trainer not found');
    }
  });
  
  router.put('/:id/edit', async (req, res) => {
    try {
      const {id} = req.params;
      if (req.body){
  
        const { name, image, level, types } = req.body;
        // console.log(req.body, typeof name , typeof age, typeof hometown, typeof image)
        const pokemon = await Pokemon.findByIdAndUpdate(id, {name, image, level, types});
        res.redirect('/pokemoncreate/show')
      }else {
        return 
      }
      
      
    } catch (error) {
      console.error(error);
      res.status(500).send("Server Error");
    }
  })

  module.exports = router;