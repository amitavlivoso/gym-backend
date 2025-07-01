const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");

const NutritionPlan = sequelize.define("nutrition_plan", {
  userId: {
    type: DataTypes.INTEGER,
    references: { model: User, key: "id" },
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  goal: {
    type: DataTypes.STRING,
    allowNull: false, // e.g., "Lose Weight", "Gain Muscle"
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false, // e.g., "4 weeks"
  },
  mealsPerDay: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fromDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  toDate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  eating: {
    type: DataTypes.ENUM("Vegetarian", "Non-Vegetarian", "Vegan"),
    allowNull: false,
    defaultValue: "Vegetarian",
  },
  protein: {
    type: DataTypes.ENUM("Low", "Moderate", "High"),
    allowNull: false,
    defaultValue: "Moderate",
  },
  whichProtein: {
    type: DataTypes.STRING,
    allowNull: true,
    comment: "Specific protein recommendation (e.g., Whey, Soy, Pea)",
  },
});

module.exports = NutritionPlan;
