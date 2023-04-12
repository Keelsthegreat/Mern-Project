const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemon');
const trainerRoutes = require('./routes/trainers');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/pokemon', pokemonRoutes);
app.use('/api/trainers', trainerRoutes);

const port = process.env.PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});