const express = require ('express')
const { addProduct, getAllProduct, UpdateProduct, DeleteProduct, GetOneProduct } = require('../Controllers/Product')

const productRouter = express.Router()

productRouter.post('/addProduct',addProduct)

productRouter.get('/getAllProduct', getAllProduct)

productRouter.put('/updateProduct/:id',UpdateProduct)

productRouter.delete('/deleteProduct/:id',DeleteProduct)

productRouter.get('/getOneProduct/:id',GetOneProduct)

module.exports = productRouter