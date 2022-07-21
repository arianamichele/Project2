require('dotenv').config();
//require('express-async-errors');
// dependencies
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')





// MIDDLEWARE
app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public')); // can just go straight to path
app.use(expressLayouts);

app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const recipeRoutes = require('./server/routes/recipe-routes')
app.use('/', recipeRoutes);

const port = process.env.PORT || 3000;
app.listen(process.env.PORT || 3000, () => console.log(`listening to port ${port}`))