const { DataTypes } = require("sequelize");
const db = require("../utils/database");
const Series = require("../models/series.models");

const Seasons = db.define("seasons", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  seriesId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Series,
      key: 'id'
    }
  },
  season_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  releaseYear: {
    type: DataTypes.INTEGER,
  },
  coverUrl: {
    type: DataTypes.STRING,
  },
  traillerUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = Seasons;
