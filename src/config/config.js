require('dotenv').config();

module.exports = {
  development: {
    // url: process.env.DB_URL_DEV,
    // dialect: 'postgres',
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: 'postgres',
    port: process.env.dbport,
  },
  test: {
    username: 'joe1',
    password: '1234',
    database: 'postit_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
