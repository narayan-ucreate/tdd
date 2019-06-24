require('dotenv').config();
module.exports = {
  "development": {
    "username": "postgres",
    "password": "ucreate",
    "database": "tdd_database_development",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "logging": false
  },
  "test": {
    "username": "postgres",
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": "localhost",
    "dialect": "postgres",
    "operatorsAliases": false,
    "logging": false
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database":  process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  }
}
