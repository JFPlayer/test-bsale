const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const Category = require('./Category')

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT
  },
  url_image: {
    type: DataTypes.TEXT
  },
  price: {
    type: DataTypes.FLOAT
  },
  discount: {
    type: DataTypes.INTEGER
  },
  category: {
    type: DataTypes.INTEGER
  },
}, {
  //name in the database
  tableName: 'product',
  timestamps: false,
})

//association 
Product.hasOne(Category, { foreignKey: 'id', sourceKey: 'category' })

module.exports = Product