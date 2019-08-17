module.exports = {
  movieDBApiKey: process.env.MOVIE_DB_API_KEY,

  dbConnection: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    pool: { min: 0, max: 7 }
  }

};
