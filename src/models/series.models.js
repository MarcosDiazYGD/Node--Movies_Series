const { DataTypes } = require("sequelize");
const UUID = require("uuid");

const db = require("../utils/database");

const Series = db.define("series", {

  id: {
    type: DataTypes.UUID,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  releaseYear: {
    type: DataTypes.INTEGER
  },
  director: {
    type: DataTypes.STRING
  },
  classification: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT
  }
});

module.exports = Series