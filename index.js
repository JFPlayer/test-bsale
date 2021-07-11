const { config } = require('./config')
const app = require('./app')
const { sequelize } = require('./database')

app.listen(config.port, () => {
  console.log(`listening on port ${config.port}`)
  
  sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error))
})