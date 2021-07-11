const Product = require('../models/Product')
const Category = require('../models/Category')
const { Op } = require('sequelize')

exports.getProducts = async (req, res) => {
  const query = {}

  if(req.query) {
    const { search, limit, page, categoryId } = req.query
    
    if(search) query.where = { name: { [Op.substring]: search } }

    if(categoryId) query.where = { category: categoryId }

    if(limit) query.limit = parseInt(limit)

    if(page) query.offset = parseInt(page) > 0 ? (parseInt(page) - 1) * parseInt(limit) : 0
  }

  try {
    const products = await Product.findAndCountAll({
      include: [Category],
      attributes: { exclude: 'category' },
      ...query,
    })
    
    if(!products.count) return res
      .status(404)
      .send({
        body: 'products not found'
      })

    res
      .status(200)
      .send({
        body: products
      })
      
  } catch (error) {
    res
      .status(500)
      .send({
        body: error
      })
  }
}

exports.getProductById = async (req, res) => {
  const { productId } = req.params

  try {
    const product = await Product.findByPk(
      productId,
      {
        include: [Category],
        attributes: { exclude: 'category' },
      }
    )

    if(!product) return res
      .status(404)
      .send({
        body: 'product not found'
      })

    res
      .status(200)
      .send({
        body: product
      })

  } catch (error) {
    res
      .status(500)
      .send({
        body: error
      })
  }
  
}