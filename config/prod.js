module.exports = {
  movieDBApiKey: process.env.MOVIE_DB_API_KEY,

  dbConnection: {
    client: 'pg',
    connection: {
      connectionString: "postgres://zpkyjhfhcmttnb:e07eecab726dc0a01bd856167a45aafd019c722378b26b9514c429d109ea0438@ec2-174-129-227-205.compute-1.amazonaws.com:5432/d7ipmuc10o4eic",
    },
    pool: { min: 0, max: 7 }
  }

};
