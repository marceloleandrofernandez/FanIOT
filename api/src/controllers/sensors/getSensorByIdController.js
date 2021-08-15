const {Sensors} = require('../../db');

module.exports = async (req, res, next) => {
	try {
		let id = req.params.id;
		sensor = await Sensors.findOne({
			where:{
				id
			}
		});
		return res.json(sensor).status(200);
	} catch (err) {
		res.json(err);
		return console.log(err);
	}
};