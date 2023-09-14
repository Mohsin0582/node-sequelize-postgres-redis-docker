require('dotenv').config()

module.exports = {
  development: {
    // url: process.env.DEV_DATABASE_URL,
    url: process.env.DEV_DATABASE_URI,
    dialect: 'postgres',
  },
  test: {
    url: process.env.TEST_DATABASE_URI,
    dialect: 'postgres',
  },
  production: {
    url: process.env.DATABASE_URI,
    dialect: 'postgres',
  },
}