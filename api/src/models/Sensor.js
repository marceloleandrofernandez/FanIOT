const {DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	sequelize.define('sensors', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: DataTypes.STRING(20),
		},
		model: {
			type: DataTypes.STRING(20),
		},
		description: {
			type: DataTypes.STRING(20),
		}
	})
};
