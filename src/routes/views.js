const express = require('express');
const router = express.Router();

// Ruta para la página principal
router.get('/', (req, res) => {
    res.render('index', { title: 'Visualizador de Estructuras de Datos' });
});

module.exports = router;
