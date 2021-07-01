const Product = require('../models/Product')
const Category = require('../models/Category')
const { Op } = require('sequelize')

exports.getProducts = async (req, res) => {
  const products = await Product.findAndCountAll({
    include: [Category],
    attributes: { exclude: 'category' },
    offset: 0,
    limit: 5,
    where: {
      name: {
        [Op.substring]: req.query.search
      }
    },
  })
  res.json(products)
}