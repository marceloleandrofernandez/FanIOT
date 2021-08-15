const {Sensors} = require('../../db');

module.exports = async (req, res, next) => {
	try {
		sensors = await Sensors.findAll();
		return res.json(sensors).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
