// Aquí es configurarà la connexió a MongoDB i s'inicialitzarà l'app Express
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const db = require('./config/db');

const app = express();
app.use(express.json());

// Connexió a MongoDB
mongoose.connect(process.env.MONGODB_URI || db.mongoURI)
  .then(() => console.log('Connectat a MongoDB'))
  .catch(err => console.error('Error de connexió a MongoDB:', err));

// Importació de rutes
app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escoltant al port ${PORT}`);
});
