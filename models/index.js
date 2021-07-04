const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')

const BreweriesModel = require('./breweries')
const BeersModel = require('./beers')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Breweries = BreweriesModel(connection, Sequelize)
const Beers = BeersModel(connection, Sequelize, Breweries)

Beers.belongsTo(Breweries)
Breweries.hasMany(Beers)

module.exports = {
  Breweries,
  Beers,
  Sequelize,
}
