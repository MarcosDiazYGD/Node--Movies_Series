const moviesController = require("./movies.controllers");
const responses = require("../utils/handleResponses");

const getAllMovies = (req, res) => {
  moviesController
    .findAllMovies()
    .then((data) => {
      responses.success({
        res,
        status: 200,
        data,
        message: "Gettings all the movies",
      });
    })
    .catch((err) => {
      responses.error({
        data: err,
        message: "Something bad getting the movies",
        status: 400,
      });
    });
};

const postMovie = async (req, res) => {
  const movieObj = req.body;
  const movieFile = req.file;
  // const coverFile = req.files.coverImage[0]

  try {
    const movieUrl = await addToFirebaseMovieVideo(movieFile);
    const data = await movieControllers.createMovie({ ...movieObj, movieUrl });
    responses.success({
      res,
      status: 201,
      data,
      message: "Movie Created! :D",
    });
  } catch (err) {
    responses.error({
      res,
      data: err,
      message: err.message,
      status: 400,
      fields: {
        title: "string",
        synopsis: "string",
        releaseYear: 2020,
        director: "string",
        duration: 180,
        trillerUrl: "a",
        coverUrl: "a",
        classification: "string",
        rating: 0.0,
      },
    });
  }
};
