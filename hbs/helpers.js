const hbs = require('hbs');

//Helpers hbs
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        //Se coge cada palabra del array y se sustituye por el inicio de la palabra en mayusculas y el resto de la palabra en
        //minusculas
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })

    return palabras.join(' ');
})

