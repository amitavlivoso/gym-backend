const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Equipment = sequelize.define("equipment", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM("Strength", "Cardio", "Flexibility", "Other"),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  condition: {
    type: DataTypes.ENUM("Good", "Maintenance", "Damaged"),
    allowNull: false,
  },
});

module.exports = Equipment;
