const cors = require('cors')
const express = require('express')
const app = express()


app.use(cors())
app.use(express.json())

const productsRoutes = require('./routes/api/products.routes')

app.use('/api/products', productsRoutes)

module.exports = app