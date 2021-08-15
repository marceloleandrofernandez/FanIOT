const router = require('express').Router();

const addMeasurement = require("../controllers/measurements/addMeasurementController");  

const getMeasurementBySensorId = require('../controllers/measurements/getMeasurementsBySensorIdController');

router.post('/addmeasurement', addMeasurement)
router.get('/:id', getMeasurementBySensorId);


module.exports = router;