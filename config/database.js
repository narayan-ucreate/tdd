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
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
