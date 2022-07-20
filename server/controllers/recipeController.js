require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe')


// * Get /
// * Homepage

exports.homepage = async(req, res) => {
    try {
        //prevent further categories
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
        const thai = await Recipe.find()

        const food = { latest }; 
        res.render('index', { title: 'Recipe Blog - Home', categories, food});
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occurred"})
    }
}

// GET categories

exports.exploreCategories = async(req, res) => {
    try {
        //prevent further categories
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories', { title: 'Recipe Blog - Categories', categories});
    } catch (error) {
        res.status(500).send({message: error.message || "Error Occurred"})
    }
}



// connected and working
// async function insertCategoryData(){

//     try {
//         await Category.insertMany([
//             {
//                 "name": "Thai",
//                 "image": "thai-food.jpeg"
//             },
//             {
//                 "name": "American",
//                 "image": "american-food.jpeg"
//             },
//             {
//                 "name": "Chinese",
//                 "image": "chinese-food.jpeg"
//             },
//             {
//                 "name": "Mexican",
//                 "image": "mexican-food.jpeg"
//             },
//             {
//                 "name": "Indian",
//                 "image": "indian-food.jpeg"
//             },
//             {
//                 "name": "Spanish",
//                 "image": "spanish-food.jpeg"
//             },
//         ]);
//     } catch (error) {
//     console.log('err', + error)
//     }
// }

//insertCategoryData();

