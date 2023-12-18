const mongoose = require('mongoose');

const passwordSchema = new mongoose.Schema({
  password: { type: String, required: true },
  strength: { type: Object, required: true },
  created_at: { type: Date, default: Date.now },
});

const Password = mongoose.model('Password', passwordSchema);

module.exports = Password;