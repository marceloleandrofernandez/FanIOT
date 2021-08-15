const {DataTypes} = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	sequelize.define('measurements', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
		temperature: {
			type: DataTypes.DECIMAL(10, 2),
		}
	})
};
