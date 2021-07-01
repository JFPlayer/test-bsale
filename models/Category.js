const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')


const Category = sequelize.define('Category', {
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
}, {
  tableName: 'category',
  // freezeTableName: true,
  timestamps: false,
})

module.exports = Category
