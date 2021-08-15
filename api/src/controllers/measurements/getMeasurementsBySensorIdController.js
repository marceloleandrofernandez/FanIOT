const {Sensors, Measurements} = require('../../db');

module.exports = async (req, res, next) => {
    let sensorId = req.params.id;
	try {
		sensors = await Measurements.findAll({
                where: {
                sensorId
              }
        });
		return res.json(sensors).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};
