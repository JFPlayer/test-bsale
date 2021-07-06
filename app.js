const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path')


app.use(cors())
app.use(express.json())

const productsRoutes = require('./routes/api/products.routes')

app.use('/api/products', productsRoutes)

app.use(express.static(path.join(__dirname, 'client', 'dist')));

module.exports = app