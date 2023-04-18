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
    res.render("home", { pokemonList, pokemonData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

module.exports = router;
