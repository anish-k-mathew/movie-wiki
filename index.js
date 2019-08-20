const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const path = require('path');
const config = require('./config/keys');
const db = knex(config.dbConnection);
require('dotenv').config();

const auth = require('./auth');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Then use it before your routes are set up:
app.use(cors());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.post('/api/movie', (req, res) => {
  db('user_content')
    .insert({
      email: req.body.email,
      ext_content_id: req.body.contentId,
      content_type: req.body.contentType,
      title: req.body.title,
      description: req.body.description,
      last_viewed_at: new Date()
    })
    .then(console.log('added movie'));
  res.json(req.body);
});

app.post('/api/watch', (req, res) => {
  db('user_content_watch_list')
    .insert({
      email: req.body.email,
      ext_content_id: req.body.contentId,
      content_type: req.body.contentType,
      title: req.body.title,
      description: req.body.description
    })
    .then(console.log('added to watchlist'));
  res.json(req.body);
});

app.delete('/api/list/:id', (req, res) => {
  db('user_content_watch_list')
    .where({ id: req.params.id })
    .del()
    .then(console.log('deleted from list'));
  res.json('deleted');
});

app.delete('/api/history/:id', (req, res) => {
  db('user_content')
    .where({ id: req.params.id })
    .del()
    .then(console.log('deleted from list'));
  res.json('deleted');
});

app.get('/api/history/:email', (req, res) => {
  db('user_content')
    .select('*')
    .where({ email: req.params.email })
    .then(response => {
      return res.json(response);
    });
});

app.get('/api/list/:email', (req, res) => {
  db('user_content_watch_list')
    .select('*')
    .where({ email: req.params.email })
    .then(response => {
      return res.json(response);
    });
});

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5070;
// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
