const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController')

// * Routes
router.get('/', recipeController.homepage);
router.get('/categories', recipeController.exploreCategories);
router.get('/recipe/:id', recipeController.exploreRecipe)


module.exports = router;