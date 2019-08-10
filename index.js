const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const knex = require("knex");

const PORT = process.env.PORT || 5070;
// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

const db = knex({
  client: 'pg',
  connection: {
    //host : process.env.DATABASE_URL
    connectionString: process.env.DATABASE_URL,
    ssl: true
  }
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Then use it before your routes are set up:
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

if (process.env.NODE_ENV === "production") {
  // Express will service prod assets like main.js file
  app.use(express.static("client/build"));

  // Express will serve index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.post("/register", (req, res) => {
  db("user_profile").insert({
    email: req.body.email,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    joined_dt: new Date(),
    last_login_dt: new Date()
  });
  res.json(req.body);
});

app.post("/movie", (req, res) => {

  db("user_content")
    .insert({
      email: req.body.email,
      ext_content_id: req.body.contentId,
      content_type: req.body.contentType,
      title: req.body.title,
      description: req.body.description,
      last_viewed_dt: new Date()
    })
    .then(console.log("sucess"));
  res.json(req.body);
});


app.post("/watch", (req, res) => {

  db("user_content_watch_list")
    .insert({
      email: req.body.email,
      ext_content_id: req.body.contentId,
      content_type: req.body.contentType,
      title: req.body.title,
      description: req.body.description
    })
    .then(console.log("sucess"));
  res.json(req.body);
});

app.get("/seenlist", (req, res) => {
  db("USER_CONTENT")
    .select("*")
    .where({ email : "mathew.anishk@gmail.com" })
    .then(response => {
      return res.json(response);
    });
});


app.get("/watchlist", (req, res) => {
  db("USER_CONTENT_WATCH_LIST")
    .select("*")
    .where({ email : "mathew.anishk@gmail.com" })
    .then(response => {
      return res.json(response);
    });
});