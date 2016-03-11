module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/oauth'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};