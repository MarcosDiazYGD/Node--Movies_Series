const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Movies = db.define('movies', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  director: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  traillerUrl: {
    type: DataTypes.STRING,
  },
  coverUrl: {
    type: DataTypes.STRING,
  },
  movieUrl: {
    type: DataTypes.STRING,
  },
  clasification: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0.0
  },
});

module.exports = Movies