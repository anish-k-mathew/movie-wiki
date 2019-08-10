const mongoose = require("mongoose");
const { Schema } = mongoose;

const movieSchema = new Schema({
  googleId: String,
  userId: String,
  movieId: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now }
});

mongoose.model("movies", movieSchema);
