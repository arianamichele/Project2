require('../models/database');
const Category = require('../models/Category');


// * Get /
// * Homepage

exports.homepage = async(req, res) => {
    res.render('index', { title: 'Recipe Blog - Home'});
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

insertCategoryData();