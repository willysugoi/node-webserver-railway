const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()
const port = process.env.PORT;

// Inicializamos handlebars(hbs)
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Midleware, servir contenido estático
// Acá estamos diciendo que todo lo que está en la carpeta public es accesible para todos
app.use(express.static('public'));

// Renderizando una pagina html
// El renderizado nos permite usar una pagina html, y poder manipularla
app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Willy',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Willy',
        titulo: 'Curso de Node generic'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Willy',
        titulo: 'Curso de Node elements'
    });
});

// con * estamos dando la orden, que si ingresan cualquier otra ruta que no exista
// nos envíe este mensaje por defecto, para este ejemplo llegamos con la ruta
// http://localhost:8080/ejemplo
// El send es para usar directo un mensaje escrito, y el sendfile(como en este ejemplo)
// es para llamar a una página
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
  });

app.listen(port,() =>{
    console.log(`Escuchando la app desde http://localhost:${port}`);
}) // Configuramos el puerto 8080