const express = require('express')
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;


// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//servir contenido estatico
app.use( express.static('public') );

//LAS RUTAS TIENE QUE ESTAR DEFINIDAS ACA 

app.get('/', (req, res) => {    
    res.render('home', {
        nombre: "andres gomez",
        titulo: "curso de node"
    });
})

app.get('/generic', (req, res) => {    
    res.render('generic', {
        nombre: "andres gomez",
        titulo: "curso de node"
    });
})

app.get('/elements', (req, res) => {    
    res.render('elements', {
        nombre: "andres gomez",
        titulo: "curso de node"
    });
})

// app.get('/elements', (req, res) => {    
//     res.sendFile(__dirname + '/public/elements.html');
// })

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})