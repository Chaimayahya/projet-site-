const Product = require("../Models/Product")

exports.addProduct = async(req,res)=>{
    try {
        const {refP,nameProduct,prixP,description,image} = req.body
        const found = await Product.findOne({refP})
        if (found) {
            return res.status(400).send({errors : [{msg : "Product exists"}]})
        }
        const newProduct = new Product(req.body)

        await newProduct.save()


        res.status(200).send({msg : 'Product Registred', newProduct})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not add product"}]})
    }
}

exports.getAllProduct = async(req,res)=>{
    try {
        const products = await Product.find()
    
        res.status(200).send({Msg : "Product list",products})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get product"}]})

    }
}


exports.UpdateProduct = async(req,res)=>{
    try {
        const {id} = req.params

        await Product.findByIdAndUpdate(id,{$set : req.body}) 

        res.status(200).send("Product updated")
    } catch (error) {
        res.status(500).send('Could not update Product')
    }
}

exports.DeleteProduct= async(req,res)=>{
    try {
        const {id} = req.params

        await Product.findByIdAndDelete(id)

        res.status(200).send("Product deleted")
    } catch (error) {
        res.status(500).send('Could not delete Product')
    }
}

exports.GetOneProduct = async(req,res)=>{
    try {
        const {id} = req.params

        const product = await Product.findById(id)

        res.status(200).send({Msg : "product",product})
    } catch (error) {
        res.status(500).send('Could not get product')
    }
}