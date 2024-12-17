const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public'))); // Archivos estáticos

// Configuración de vistas (EJS o Pug)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rutas
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/views');

app.use('/api', apiRoutes);
app.use('/', viewRoutes);

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});
