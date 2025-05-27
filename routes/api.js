const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/mainController');
const auth = require('../middlewares/auth');
const authCtrl = require('../controllers/authController');

// Pilots
router.get('/pilots', ctrl.getAllPilots);
router.get('/pilots/top', ctrl.getTopPilots);
router.get('/pilots/:id', ctrl.getPilotById);

// Auth
router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);

// Protegeix POST, PUT, DELETE
router.use(auth);

router.post('/pilots', ctrl.createPilot);
router.put('/pilots/:id', ctrl.updatePilot);
router.delete('/pilots/:id', ctrl.deletePilot);

// Escuderies
router.get('/escuderies', ctrl.getAllEscuderies);
router.get('/escuderies/:id', ctrl.getEscuderiaById);
router.post('/escuderies', ctrl.createEscuderia);
router.put('/escuderies/:id', ctrl.updateEscuderia);
router.delete('/escuderies/:id', ctrl.deleteEscuderia);
router.get('/escuderies/:id/pilots', ctrl.getPilotsByEscuderia);

module.exports = router;
