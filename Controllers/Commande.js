const Commande = require("../Models/Commande")

exports.addCommande = async(req,res)=>{
    try {
       
        const newCommande = new Commande({...req.body,owner :req.user._id})

        await newCommande.save()


        res.status(200).send({msg : 'Commande Registred', newCommande})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not add commande"}]})
    }
}

exports.getAllCommande = async(req,res)=>{
    try {
        const commandes = await Commande.find().populate('owner').populate('products.product')
    
        res.status(200).send({Msg : "Commande list",commandes})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get commande"}]})

    }
}

exports.getOwnPanier = async(req,res)=>{
    try {
        const commandes = await Commande.find({owner : req.user._id, comm : false}).populate('owner').populate('products.product')
    
        res.status(200).send({Msg : "Commande list",commandes})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get commande"}]})

    }
}

exports.getOwnCommande = async(req,res)=>{
    try {
        const commandes = await Commande.find({owner : req.user._id, comm : true}).populate('owner').populate('products.product')
    
        res.status(200).send({Msg : "Commande list",commandes})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get commande"}]})

    }
}

exports.updateCommande  = async(req,res)=>{
    try {
        const {id} = req.params

        await Commande.findByIdAndUpdate(id,{$set : req.body}) 

        res.status(200).send("Commande updated")
    } catch (error) {
        res.status(500).send('Could not update commande')
    }
}

exports.deleteCommande = async(req,res)=>{
    try {
        const {id} = req.params

        await Commande.findByIdAndDelete(id)

        res.status(200).send("Commande deleted")
    } catch (error) {
        res.status(500).send('Could not delete commande')
    }
}