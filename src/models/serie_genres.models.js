const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Genres = require("../models/genres.models")
const Series = require("../models/series.models")

const series_genres = db.define("series_genres", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  seriesId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Series,
      key: 'id'
    }
  },
  genresId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Genres,
      key: 'id'
    }
  },
});

module.exports = series_genres