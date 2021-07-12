const { config } = require('./config')
const app = require('./app')
const { sequelize } = require('./database')

app.set('port', config.port || 3000)
const PORT = app.get('port')

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
  
  sequelize.authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(error => console.error('Unable to connect to the database:', error))
})