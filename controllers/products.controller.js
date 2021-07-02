const Product = require('../models/Product')
const Category = require('../models/Category')
const { Op } = require('sequelize')

exports.getProducts = async (req, res) => {
  const query = {}

  if(req.query) {
    const { search, limit, page } = req.query
    
    if(search) query.where = { name: { [Op.substring]: search } }

    if(limit) query.limit = parseInt(limit)

    if(page) query.offset = parseInt(page) > 0 ? (parseInt(page) - 1) * parseInt(limit) : 0
  }

  try {
    const products = await Product.findAndCountAll({
      include: [Category],
      attributes: { exclude: 'category' },
      ...query,
    })
    
    if(!products.count) {
      res
        .status(404)
        .send({
          body: 'products not found'
        })
    }

    res
      .status(200)
      .send({
        body: products
      })
      
  } catch (error) {
    res
      .status(500)
      .send({
        body: 'internal error'
      })
  }
  
}