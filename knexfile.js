// Update with your config settings.

module.exports = {

 
  development: {
    client: 'pg',
    connection: 'postgres://localhost/movie-wiki-db',
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connectionString: {
      host: process.env.DATABASE_URL
        }
  }

};
