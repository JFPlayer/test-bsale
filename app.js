const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path')

const productsRoutes = require('./routes/api/products.routes')
const categoriesRoutes = require('./routes/api/categories.routes')

//main middlewares
app.use(cors())
app.use(express.json())

//routes
app.use('/api/products', productsRoutes)
app.use('/api/categories', categoriesRoutes)

//website
app.use(express.static(path.join(__dirname, 'dist')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

module.exports = app