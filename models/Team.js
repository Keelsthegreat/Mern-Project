const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  trainers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Trainer" }],
  image: { type: String },
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
