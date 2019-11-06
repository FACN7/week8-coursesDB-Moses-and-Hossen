const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/index');
//const helpers = require('./views/helpers/index');



app.use('/public', express.static('public'));

// parse incoming json
app.use(bodyParser.json());
// parse urlencoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    exphbs({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'main'
        //helpers: helpers,

    })
);



app.set('port', process.env.PORT || 3000);
//app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(routes);

module.exports = app;