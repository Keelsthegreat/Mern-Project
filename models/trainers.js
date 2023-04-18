const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  hometown: { type: String, required: true },
  pokemon: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pokemon" }],
  image: { type: String },
});

const Trainer = mongoose.model("Trainer", trainerSchema);

module.exports = Trainer;
