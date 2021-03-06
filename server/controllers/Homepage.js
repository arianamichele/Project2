const axios =require('axios')

const homepage = async (req, res) => {
  //res.render('index', {title:'Homepage'})

  //query api for categories
    
    let catReq = await axios.get(
     "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    // let resp = { status: catReq.status, statusmsg: catReq.statusText, type: typeof catReq }
    // console.log(resp);
  
    const categories = catReq.data.categories
  
    res.render('index', {title:'Homepage', categories})
}

module.exports = {
  homepage,
}


// * Get /
// * Homepage

// exports.homepage = async(req, res) => {
//     try {
//         //prevent further categories
//         const limitNumber = 5;
//         const categories = await Category.find({}).limit(limitNumber);
//         const latest = await Recipe.find({}).sort({_id: -1}).limit(limitNumber);
//         const thai = await Recipe.find({ 'category': 'Thai'}).limit(limitNumber);
//         const american = await Recipe.find({ 'category': 'American'}).limit(limitNumber);
//         const chinese = await Recipe.find({ 'category': 'Chinese'}).limit(limitNumber);



//         const food = { latest, thai, american, chinese }; 
//         res.render('index', { title: 'Recipe Blog - Home', categories, food});
//     } catch (error) {
//         res.status(500).send({message: error.message || "Error Occurred"})
//     }
// }

// //GET categories
// exports.exploreCategories = async(req, res) => {
//     try {
//       const limitNumber = 20;
//       const categories = await Category.find({}).limit(limitNumber);
//       res.render('categories', { title: 'Cooking Blog - Categoreis', categories } );
//     } catch (error) {
//       res.satus(500).send({message: error.message || "Error Occured" });
//     }
//   } 
  
  
//   // Get Categories by id
//   exports.exploreCategoriesById = async(req, res) => { 
//     try {
//       let categoryId = req.params.id;
//       const limitNumber = 20;
//       const categoryById = await Recipe.find({ 'category': categoryId }).limit(limitNumber);
//       res.render('categories', { title: 'Cooking Blog - Categoreis', categoryById } );
//     } catch (error) {
//       res.satus(500).send({message: error.message || "Error Occured" });
//     }
//   } 

// // GET recipe/:id

// exports.exploreRecipe = async(req, res) => {
//     try {
//         let recipeId = req.params.id;

//         const recipe = await Recipe.findById(recipeId)
// ;
 
//        res.render('recipe', { title: 'Recipe Blog - Recipe', recipe });
//     } catch (error) {
//         res.status(500).send({message: error.message || "Error Occurred"})
//     }
// }

// // post

// //search

// exports.searchRecipe = async(req, res) => {
//     try {
//       let searchTerm = req.body.searchTerm;
//       let recipe = await Recipe.find( { $text: { $search: searchTerm, $diacriticSensitive: true } });
//       res.render('search', { title: 'Cooking Blog - Search', recipe } );
//     } catch (error) {
//       res.satus(500).send({message: error.message || "Error Occured" });
//     }
    
//   }

//   exports.submitRecipe = async(req, res) => {
//     // const infoErrorsObj = req.flash('infoErrors');
//     // const infoSubmitObj = req.flash('infoSubmit');
//     res.render('submit-recipe', { title: 'Cooking Blog - Submit Recipe'  } );
//   }

// connected and working
// async function insertCategoryData(){

//     try {
//         await Category.insertMany([
//            {
//                "name": "Thai",
//                "image": "thai-food.jpeg"
//           },
//            {
//               "name": "American",
//               "image": "american-food.jpeg"
//            },
//            {
//                "name": "Chinese",
//                "image": "chinese-food.jpeg"
//            },
//            {
//                "name": "Mexican",
//                "image": "mexican-food.jpeg"
//           },
//            {
//                "name": "Indian",
//                "image": "indian-food.jpeg"
//           },
//           {
//               "name": "Spanish",
//                "image": "spanish-food.jpeg"
//            },
//        ]);
//    } catch (error) {
//    console.log('err', + error)
//     }
// }

// insertCategoryData();

