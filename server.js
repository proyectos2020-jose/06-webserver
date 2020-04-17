const express = require('express');
const app = express();
const hbs = require('hbs');
// Configuración necesaria para heroku. De esta forma cogemos el puerto en "caliente" del servidor de heroku
// Le ponemos el OR ya que en local no va a existir el enviroment.PORT, así en local se ejecutará en el 3000
const port = process.env.PORT || 3000;

// Los helpers los importamos de esta forma porque al llamar al archivo helpers.js ya se ejecuta el codigo que hay dentro
// al hacerlo de esta forma, y de esa manera ya quedaría lanzados en el hbs
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Directorio que contiene los parciales par handlebars
hbs.registerPartials(__dirname + '/views/partials')

//Express hbs engine
app.set('view engine', 'hbs');


app.get('/', function (req, res) {

    res.render('home', {
        nombre: 'joSe'
    });
})

app.get('/about', function (req, res) {

    res.render('about', {
        nombre: 'joSe'
    });
})

app.listen(port, () => console.log(`Sirviendo en el puerto ${port}`))
