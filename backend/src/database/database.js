const sequelize = require('sequelize')
const config = require('../config/config')
const teste = require('../model/table-teste')

const connection = new sequelize(config)

teste.init(connection)

module.exports = connection;