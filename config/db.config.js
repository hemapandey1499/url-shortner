const mongoose = require('mongoose')

const DB_URI = 'mongodb+srv://hemapandey14:Alliswell@cluster0.hi8akd9.mongodb.net/'

mongoose.connect(DB_URI,{useNewUrlParser:true, useUnifiedTopology:true})

const connection = mongoose.connection

module.exports = connection
