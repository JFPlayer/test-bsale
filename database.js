const { config } = require('./config')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  logging: false,
}, )

module.exports = { sequelize }