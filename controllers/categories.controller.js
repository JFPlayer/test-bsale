const Category = require('../models/Category')

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()

    if(!categories) return res
      .status(404)
      .send({
        body: 'categories not found'
      })

    res
      .status(200)
      .send({
        body: categories
      })
  } catch (error) {
    res
      .status(500)
      .send({
        body: error
      })
  }
}