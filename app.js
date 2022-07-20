// dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

// MIDDLEWARE
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public')); // can just go straight to path
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log(`listening to port ${port}`))