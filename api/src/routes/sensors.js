const router = require('express').Router();

const addSensor = require("../controllers/sensors/addSensorController");  
const getAllSensors = require("../controllers/sensors/getAllSensorsController");
const getSensorById = require('../controllers/sensors/getSensorByIdController');
const deleteSensor = require('../controllers/sensors/deleteSensorController');

router.post('/addsensor', addSensor)
router.get('/getAllSensors', getAllSensors)
router.get('/:id', getSensorById);
router.delete('/delete/:id', deleteSensor);  

module.exports = router;