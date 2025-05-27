const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Usuari i contrasenya requerits' });
    const existing = await User.findOne({ username });
    if (existing) return res.status(409).json({ error: 'Usuari ja existeix' });
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash });
    await user.save();
    res.status(201).json({ missatge: 'Usuari registrat' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ error: 'Usuari i contrasenya requerits' });
    const user = await User.findOne({ username });
    if (!user) return res.status(401).json({ error: 'Credencials incorrectes' });
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ error: 'Credencials incorrectes' });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || 'claujwt', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
