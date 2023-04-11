const express = require('express');
const mongoose = require('mongoose')
const PokemonData = require('./models/Pokemon')
const TrainerData = require('./models/Trainer')
const TeamData = require('./models/Team');
const { createEngine } = require('express-react-views');

require('dotenv').config()
const app = express();
const PORT = 5000 

//Middleware
app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').
createEngine())

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(methodOverride('_method'))
app.use(express.static('public'))

//Routing 
app.get('/', async (req, res) =>{
     

})