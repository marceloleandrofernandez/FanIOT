const {Router} = require('express');

const sensors = require('./sensors.js');
const measurements = require('./measurements.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();



// Configurar los routers

router.use('/sensors', sensors);
router.use('/measurements', measurements);

module.exports = router;
