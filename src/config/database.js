'use strict'
const { database } = require('./index')
module.exports = {
  username: database.username,
  password: database.password,
  database: database.name,
  host: database.host,
  dialect: database.dialect,
  define: {
    timestamps: true,
    underscored: true,
    freezeTableName: true
  }
}