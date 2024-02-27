const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        refP : {type: String, required: true, unique: true},
        nameProduct : String,
        prixP : Number,
        image : String,
        description : String,
        categorie : String
    }
)

module.exports = mongoose.model('product',productSchema)