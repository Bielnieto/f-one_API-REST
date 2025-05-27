const Pilot = require('../models/pilot');
const Escuderia = require('../models/escuderia');

// Pilots
exports.getAllPilots = async (req, res) => {
  try {
    const pilots = await Pilot.find().populate('escuderia');
    res.json(pilots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPilotById = async (req, res) => {
  try {
    const pilot = await Pilot.findById(req.params.id).populate('escuderia');
    if (!pilot) return res.status(404).json({ error: 'Pilot no trobat' });
    res.json(pilot);
  } catch (err) {
    res.status(400).json({ error: 'ID invàlid' });
  }
};

exports.createPilot = async (req, res) => {
  try {
    const pilot = new Pilot(req.body);
    await pilot.save();
    res.status(201).json(pilot);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePilot = async (req, res) => {
  try {
    const pilot = await Pilot.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!pilot) return res.status(404).json({ error: 'Pilot no trobat' });
    res.json(pilot);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePilot = async (req, res) => {
  try {
    const pilot = await Pilot.findByIdAndDelete(req.params.id);
    if (!pilot) return res.status(404).json({ error: 'Pilot no trobat' });
    res.json({ missatge: 'Pilot eliminat' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTopPilots = async (req, res) => {
  try {
    const pilots = await Pilot.find().sort({ punts: -1 }).limit(5).populate('escuderia');
    res.json(pilots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Escuderies
exports.getAllEscuderies = async (req, res) => {
  try {
    const escuderies = await Escuderia.find();
    res.json(escuderies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEscuderiaById = async (req, res) => {
  try {
    const escuderia = await Escuderia.findById(req.params.id);
    if (!escuderia) return res.status(404).json({ error: 'Escuderia no trobada' });
    res.json(escuderia);
  } catch (err) {
    res.status(400).json({ error: 'ID invàlid' });
  }
};

exports.createEscuderia = async (req, res) => {
  try {
    const escuderia = new Escuderia(req.body);
    await escuderia.save();
    res.status(201).json(escuderia);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEscuderia = async (req, res) => {
  try {
    const escuderia = await Escuderia.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!escuderia) return res.status(404).json({ error: 'Escuderia no trobada' });
    res.json(escuderia);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEscuderia = async (req, res) => {
  try {
    const escuderia = await Escuderia.findByIdAndDelete(req.params.id);
    if (!escuderia) return res.status(404).json({ error: 'Escuderia no trobada' });
    res.json({ missatge: 'Escuderia eliminada' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPilotsByEscuderia = async (req, res) => {
  try {
    const pilots = await Pilot.find({ escuderia: req.params.id }).populate('escuderia');
    res.json(pilots);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
