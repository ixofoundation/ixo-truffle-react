require('dotenv').config();

module.exports = {
  "development": {
    "database": process.env.POSTGRES_DATABASE_DEV,
    "username": process.env.POSTGRES_USERNAME_DEV,
    "password": process.env.POSTGRES_PASSWORD_DEV,
    "host": process.env.POSTGRES_HOST_DEV,
    "dialect": "postgres"
  },

  "test": {
    "database": process.env.POSTGRES_DATABASE_TEST,
    "username": process.env.POSTGRES_USERNAME_TEST,
    "password": process.env.POSTGRES_PASSWORD_TEST,
    "host": process.env.POSTGRES_HOST_TEST,
    "dialect": "postgres"
  },

  "production": {
    "database": process.env.POSTGRES_DATABASE_PROD,
    "username": process.env.POSTGRES_USERNAME_PROD,
    "password": process.env.POSTGRES_PASSWORD_PROD,
    "host": process.env.POSTGRES_HOST_PROD,
    "dialect": "postgres"
  }
}