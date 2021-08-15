const {Sensors} = require('../../db');

module.exports = async (req, res, next) => {
	let sensor = req.body;
	
	try {
		sensor = await Sensors.create(sensor);
		console.log("2. se creo el sensor")
		return res.json(sensor).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
