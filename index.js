const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./models/User");
require("./services/Passport");

const keys = require("./config/keys");
const MovieDb = require("moviedb-promise");

const moviedb = new MovieDb(keys.movieDBApiKey);

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Then use it before your routes are set up:
app.use(cors());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  // Express will service prod assets like main.js file
  app.use(express.static("client/build"));

  // Express will serve index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.send(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3000;

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// create a GET route
app.get("/search/:name", (req, res) => {
  moviedb
    .searchMovie({ query: req.params.name })
    .then(results => {
      res.send(results.results);
    })
    .catch(console.error);
});
