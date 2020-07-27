require('dotenv').config();

module.exports = {
  development: {
    username: process.env.user,
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: 'postgres',
    port: process.env.dbport,
  },

  test: {
    username: 'test_user',
    password: '1234',
    database: 'test_db',
    host: '127.0.0.1',
    dialect: 'postgres',
    port: 5432,
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
};
