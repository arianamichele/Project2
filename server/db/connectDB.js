const mongoose = require('mongoose')

const connectDB = (MONGODB_URI) => {
     return mongoose.connect(MONGODB_URI)
}

module.exports = connectDB 
