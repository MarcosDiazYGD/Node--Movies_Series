const { DataTypes } = require("sequelize");
const db = require("../utils/database");

const Episodes = db.define("episodes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  episodeUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  seasonId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  episodeNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  coverUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Episodes