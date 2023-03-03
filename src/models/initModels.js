
const Episodes = require("./episodes.models")
const Genres = require("./genres.models")
const Seasons = require("./seasons.models")
const Series = require("./series.models")
const Movies  = require("./movies.models")

//? pivotes
const MovieGenres = require("./movie_genres.models")
const SeriesGenres = require("./serie_genres.models")

const initModels = () => {
    //? Users
    Users
    //? Movies <-> Genres - MovieGenres
    Movies.belongsToMany(Genres, {through: MovieGenres})
    Genres.belongsToMany(Movies, {through: MovieGenres})

    //? Series <-> Genres - SerieGenres 
    Series.belongsToMany(Genres, {through: SeriesGenres})
    Genres.belongsToMany(Series, {through: SeriesGenres})

    //? Series -> Seasons 
    Series.hasMany(Seasons)
    Seasons.belongsTo(Series)

    //? Seasons -> Episodes 
    Seasons.hasMany(Episodes)
    Episodes.belongsTo(Seasons)
}

module.exports = initModels