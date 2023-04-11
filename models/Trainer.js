const mongoose = require('mongoose')


const trainerSchema = new mongoose.trainerSchema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    badges: {
        type: Number,
        required: true
    },
   hometown: {
    type: String,
    required: true
   },
})

const Trainer = mongoose.model('Trainer', trainerSchema)

module.exports = Trainer;