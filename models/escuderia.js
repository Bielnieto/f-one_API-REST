const mongoose = require('mongoose');
const { Schema } = mongoose;

const escuderiaSchema = new Schema({
  nom: { type: String, required: true },
  pais: { type: String, required: true },
  motor: {
    type: String,
    required: true,
    enum: ['Mercedes', 'Ferrari', 'Honda', 'Renault']
  },
  anyFundacio: {
    type: Number,
    required: true,
    min: [1950, "L'any de fundació no pot ser anterior a 1950"]
  }
});

module.exports = mongoose.model('Escuderia', escuderiaSchema);
