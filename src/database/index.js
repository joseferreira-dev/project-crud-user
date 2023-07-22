const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

function connect() {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('Connected to database');
  });

  db.on('error', (err) => {
    console.error('Erro de conexão com o MongoDB:', err);
  });
}

module.exports = {
  connect
};
