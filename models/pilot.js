const mongoose = require('mongoose');
const { Schema } = mongoose;

const pilotSchema = new Schema({
  nom: { type: String, required: true },
  edat: { type: Number, required: true, min: [18, "L'edat mínima és 18 anys"] },
  nacionalitat: { type: String, required: true },
  escuderia: { type: Schema.Types.ObjectId, ref: 'Escuderia', required: true },
  punts: { type: Number, required: true, min: [0, 'Els punts no poden ser negatius'] }
});

module.exports = mongoose.model('Pilot', pilotSchema);
