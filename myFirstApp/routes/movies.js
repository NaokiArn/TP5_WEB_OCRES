var express = require('express');
var router = express.Router();

// Lodash utils library
//const _ = require('lodash');

// Create RAW data array
let movies = [{
  movies: "Star wars",
  id: "1"
}];

/* GET movies listing. */
router.get('/', function(req, res, next) {
//res.send('respond with a resource');
res.status(200).json({movies}); 
});

/* PUT new movie. */
router.put('/', (req, res) => {
    // Get the data from request from request
    const { movies } = req.body;
    // Create new unique id
    const id = _.uniqueId();
    // Insert it in array (normaly with connect the data with the database)
    users.push({ movies, id });
    // Return message
    res.json({
      message: `Just added ${id}`,
      movies: { movies, id }
    });

  });

  /* GET one movie. */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Find movies in DB
  const movies = _.find(movies, ["id", id]);
  // Return movies
  res.status(200).json({
    message: 'movies found!',
    movies 
  });
});
/* DELETE movie. */
router.delete('/:id', (req, res) => {
  // Get the :id of the user we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(movies, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});

/* UPDATE/POST movies. */
router.post('/:id', (req, res) => {
  // Get the :id of the movie we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the movie we want to update from the body of the request
  const { movies } = req.body;
  // Find in DB
  const userToUpdate = _.find(movies, ["id", id]);
  // Update data with new data (js is by address)
  moviesToUpdate.movies = movies;

  // Return message
  res.json({
    message: `Just updated ${id} with ${movies}`
  });
});
module.exports = router;