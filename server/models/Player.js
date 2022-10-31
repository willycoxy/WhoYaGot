const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const playerSchema = new Schema({

  TeamID: {
    type: Number,
    required: true
  },
  PlayerID: {
    type: Number,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true,
    trim: true
  },
  Team: {
    type: String,
    required: true,
    trim: true
  },
  Position: {
    type: String,
    required: true,
    trim: true
  },
  FantasyPoints: {
    type: Number,
    required: true,
  }
  
  
},

  {
    toJSON: {
      virtuals: true
    }
  });



const Player = model('Player', playerSchema);

module.exports = Player;