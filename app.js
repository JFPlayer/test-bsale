const cors = require('cors')
const express = require('express')
const app = express()
const path = require('path')


app.use(cors())
app.use(express.json())

const productsRoutes = require('./routes/api/products.routes')
const categoriesRoutes = require('./routes/api/categories.routes')

app.use('/api/products', productsRoutes)
app.use('/api/categories', categoriesRoutes)

app.use(express.static(path.join(__dirname, 'dist')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

module.exports = app