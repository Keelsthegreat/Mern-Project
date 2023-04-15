const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemonRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/pokemon', pokemonRoutes);
app.use('/api/trainers', trainerRoutes);

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});