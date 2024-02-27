const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const productRouter = require('./Routes/Product')
const commandeRouter = require('./Routes/Commande')
const commentaireRouter = require('./Routes/Commentaire')

const app = express()

require ('dotenv').config()

ConnectDB()

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/commande', commandeRouter)
app.use('/api/commentaire', commentaireRouter)


app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))