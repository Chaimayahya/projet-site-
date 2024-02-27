const express = require ('express')
const Commande = require('../Models/Commande')
const { isAuth } = require('../Middlewares/isAuth')
const { addCommande, getAllCommande, getOwnCommande, updateCommande, deleteCommande, getOwnPanier } = require('../Controllers/Commande')


const commandeRouter = express.Router()

commandeRouter.post('/addCommande',isAuth,addCommande)

commandeRouter.get('/getAllCommande', getAllCommande)

commandeRouter.get('/getOwnCommande', isAuth, getOwnCommande)

commandeRouter.get('/getOwnPanier', isAuth, getOwnPanier)

commandeRouter.put('/updateCommande/:id', updateCommande)

commandeRouter.delete('/deleteCommande/:id', deleteCommande)


module.exports = commandeRouter