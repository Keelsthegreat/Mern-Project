
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory data store for trainers and teams
const trainers = {};

// Get all trainers
router.get('/', (req, res) => {
  res.json(trainers);
});

// Get a specific trainer
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const trainer = trainers[id];
  if (!trainer) {
    return res.status(404).send(`Trainer with ID ${id} not found`);
  }
  res.json(trainer);
});

// Create a new trainer
router.post('/', (req, res) => {
  const { name, age } = req.body;
  const id = uuidv4();
  trainers[id] = { id, name, age, teams: [] };
  res.status(201).json({ id });
});

// Delete a trainer
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  if (!trainers[id]) {
    return res.status(404).send(`Trainer with ID ${id} not found`);
  }
  delete trainers[id];
  res.sendStatus(204);
});

// Create a new team for a trainer
router.post('/:id/teams', (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const trainer = trainers[id];
  if (!trainer) {
    return res.status(404).send(`Trainer with ID ${id} not found`);
  }
  const teamId = uuidv4();
  const team = { id: teamId, name, pokemon: [] };
  trainer.teams.push(team);
  res.status(201).json({ id: teamId });
});

// Delete a team from a trainer
router.delete('/:id/teams/:teamId', (req, res) => {
  const { id, teamId } = req.params;

  const trainer = trainers[id];
  if (!trainer) {
    return res.status(404).send(`Trainer with ID ${id} not found`);
  }
  const teamIndex = trainer.teams.findIndex((t) => t.id === teamId);
  if (teamIndex === -1) {
    return res.status(404).send(`Team with ID ${teamId} not found`);
  }
  trainer.teams.splice(teamIndex, 1);
  res.sendStatus(204);
});

// Add a Pokemon to a team for a trainer
router.post('/:id/teams/:teamId/pokemon', async (req, res) => {
  const { id, teamId } = req.params;
  const { name } = req.body;

  try {
    // Get the Pokemon data from the Poke API
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemon = {
      name: response.data.name,
      sprite: response.data.sprites.front_default,
    };

    // Add the Pokemon to the trainer's team
    const trainer = trainers[id];
    if (!trainer) {
      return res.status(404).send(`Trainer with ID ${id} not found`);
    }
    const teamIndex = trainer.teams.findIndex((t) => t.id === teamId);
    if (teamIndex === -1) {
      return res.status(404).send(`Team with ID ${teamId} not found`);
    }
    trainer.teams[teamIndex].pokemon.push(pokemon);
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Remove a Pokemon from a team for a trainer
router.delete('/:id/teams/:teamId/pokemon/:pokemonName', (req, res) => {
  const { id, teamId, pokemonName } = req.params;

  const trainer = trainers[id];
  if (!trainer) {
    return res.status(404).send(`Trainer with ID ${id} not found`);
  }
  const teamIndex = trainer.teams.findIndex((t) => t.id === teamId);
  if (teamIndex === -1) {
    return res.status(404).send(`Team with ID ${teamId} not found`);
  }
  const pokemonIndex = trainer.teams[teamIndex].pokemon.findIndex((p) => p.name === pokemonName);
  if (pokemonIndex === -1) {
    return res.status(404).send(`Pokemon with name ${pokemonName} not found in team`);
  }
  trainer.teams[teamIndex].pokemon.splice(pokemonIndex, 1);
  res.sendStatus(204);
});

module.exports = router;
