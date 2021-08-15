const {Sensors, Measurements} = require('../../db.js');

module.exports = async (req, res, next) => {
	
	let measurement = req.body;
	let {sensor} = req.body;

	try {
		measurement = await Measurements.create(measurement);
		await measurement.setSensor(sensor);
		console.log("Antes de retornar un 200")
		return res.json(measurement).status(200);
	} 
	catch (err) {
		// res.json(err);
		console.log("Antes de retornar un 403")
		res.status(403).json(new Error("El número de dpto ya está creado"))
	}
};
