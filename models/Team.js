const mongoose = require('mongoose')


const teamSchema = new mongoose.Schema({
    name: String,
    required: true,

   homebase: [{
       type: String,
       required: true,
   }],
   trainer:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer',
   }],
});

const Team = mongoose.model('Team', teamSchema)

module.exports = Team;