const mongoose = require('mongoose')


const trainerSchema = new mongoose.Schema({
    name: String,
    teams: [{
      name: String,
      pokemon: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon',
      }],
    }],
  });
  

const Trainer = mongoose.model('Trainer', trainerSchema)

module.exports = Trainer;