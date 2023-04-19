const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: [{ type: String }],
  description: { type: String, required: true },
  weight: { type: String },
  height: { type: String },
  types: [{ type: String }],
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
