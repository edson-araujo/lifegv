const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require('express-myconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
app.set('port', 4000);

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.use(myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'Maria@997982503',
    port: 3306,
    database: 'lifegv'
}));

app.listen(app.get('port'), () => {
    console.log('Escutando na porta', app.get('port'));
});

app.get('/', (req, res) => {
    res.render('home');
});
