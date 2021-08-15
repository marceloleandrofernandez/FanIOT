const {DataTypes} = require('sequelize');

const {server} = require('./src/app.js'); 
const {conn} = require('./src/db.js'); 
const {
    Sensors,
    Measurements,
} = require('./src/db.js');

const sensorsData = require('./sensorsDataMock.json'); 
const measurementsData = require('./measurementsDataMock.json'); 
const bcrypt = require('bcryptjs');

// Syncing all the models at once.
conn.sync({force: true}).then(() => {
	server.listen(3001, () => {
		console.log('Api is listening at 3001'); // eslint-disable-line no-console
	});

	// --------- precarga automática de datos de prueba ----------
	let sensorsDataStr = JSON.stringify(sensorsData);
	let sensorsDataArray = JSON.parse(sensorsDataStr);
	let sensorsDataCreation = sensorsDataArray.map(sensor => {
		return Sensors.create({
			name: sensor.name,
			model: sensor.model,
			description: sensor.description,
		
		});
	});

	let measurementsDataStr = JSON.stringify(measurementsData);
	let measurementsDataArray = JSON.parse(measurementsDataStr);
	let measurementsDataCreation = measurementsDataArray.map(measurement => {
		return Measurements.create({
			date: measurement.date,
			temperature: measurement.temperature,
			sensor: measurement.sensor,
		});
	});

	Promise.all(sensorsDataCreation.concat(measurementsDataCreation))
	.then(res => {
		res[0].setMeasurements([res[10], res[11], res[12], res[13], res[14], res[15], res[16], res[17], res[18], res[19]])
		res[1].setMeasurements([res[20], res[21], res[22], res[23], res[24], res[25], res[26], res[27], res[28], res[29]])
		res[2].setMeasurements([res[30], res[31], res[32], res[33], res[34], res[35], res[36], res[37], res[38], res[39]])
		res[3].setMeasurements([res[40], res[41], res[42], res[43], res[44], res[45], res[46], res[47], res[48], res[49]])
		res[4].setMeasurements([res[50], res[51], res[52], res[53], res[54], res[55], res[56], res[57], res[58], res[59]])
		res[5].setMeasurements([res[60], res[61], res[62], res[63], res[64], res[65], res[66], res[67], res[68], res[69]])
		res[6].setMeasurements([res[70], res[71], res[72], res[73], res[74], res[75], res[76], res[77], res[78], res[79]])
		res[7].setMeasurements([res[80], res[81], res[82], res[83], res[84], res[85], res[86], res[87], res[88], res[89]])
		res[8].setMeasurements([res[90], res[91], res[92], res[93], res[94], res[95], res[96], res[97], res[98], res[99]])
		res[9].setMeasurements([res[100], res[101], res[102], res[103], res[104], res[105], res[106], res[107], res[108], res[109]])
		console.log('test data loaded');
		
	},
	err => {
		console.log('test data not loaded');
		console.log(err);
	}
	);

});
