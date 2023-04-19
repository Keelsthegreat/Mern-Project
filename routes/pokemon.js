const express = require("express");
const axios = require("axios");


const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pokemonResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=272"
    );
    const pokemonList = pokemonResponse.data.results;
    const pokemonDataPromises = pokemonList.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonDataResponses = await Promise.all(pokemonDataPromises);
    const pokemonData = pokemonDataResponses.map((response) => response.data);
    res.render("pokedex", { pokemonList, pokemonData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

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
    const { name, image, description, weight, height, types } = req.body;
    const pokemon = new Pokemon({ name, image, description, weight, height, types });
    const save = await pokemon.save();
    console.log(save);
    res.redirect("/");
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

router.get('/:id/edit', async (req, res) => {
  try {
    const {id} = req.params;

    const pokemon = await pokemon.findById(id);
        
     res.render("EditTrainer", {trainer})
  } catch (error) {
    console.error(error);
    res.status(404).send('Trainer not found');
  }
});

router.put('/:id/edit', async (req, res) => {
  try {
    const {id} = req.params;
    if (req.body){

      const {name, age , hometown, image } = req.body;
      console.log(req.body, typeof name , typeof age, typeof hometown, typeof image)
      const trainer = await Trainer.findByIdAndUpdate(id, {name, age, hometown, image});
      res.redirect('/trainers/show')
    }else {
      return 
    }
    
    
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
})


module.exports = router;
