const express = require('express');
const router = express.Router();
const axios = require('axios');

// Get all Pokemon
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemon = response.data.results.map((p) => ({ name: p.name, url: p.url }));
    res.json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Get a specific Pokemon
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = {
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      sprite: response.data.sprites.front_default,
      abilities: response.data.abilities.map((a) => a.ability.name),
    };
    res.json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;