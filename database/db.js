const { Sequelize } = require('sequelize');
const config = require("../config")

module.exports= new Sequelize(config.DB_CONFIG.DB_NAME, config.DB_CONFIG.DB_USERNAME, config.DB_CONFIG.DB_PASSWORD, {
    host: config.DB_CONFIG.DB_URL,
    dialect: 'mariadb',
    port: 3307
  });
