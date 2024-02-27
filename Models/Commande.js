const mongoose = require('mongoose')

const commandeSchema = new mongoose.Schema(
    {
       total : Number,
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'user'
        },
        products: [{
            product: {
              type: mongoose.Types.ObjectId,
              ref: 'product'
            },
            qte: {
              type: Number,
              required: true,
              min: 1
            }
          }],
        status : {
            type : String,
            default : 'En cours de traitement'
        },
        comm : {
            type : String,
            default : false
        }
    }
)



module.exports = mongoose.model('haboub',commandeSchema)