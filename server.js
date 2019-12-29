const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;

const hbs = require('hbs');
require('./hbs/helpers');
hbs.registerPartials(__dirname + '/views/partials');

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        titulo1: 'Marcelo herváS',
        titulo2: 'Seguir luchando',
        titulo3: 'Todo puede cambiar'
    });
});
app.get('/about', (req, res) => {
    res.render('about', {});
});


app.listen(port, () => console.log(`Servidor web escuchando peticiones en el puerto ${port}`));