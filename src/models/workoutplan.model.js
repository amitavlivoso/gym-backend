const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");
const User = require("./user.model");

const WorkoutPlan = sequelize.define("workout_plan", {
  userId: {
    type: DataTypes.INTEGER,
    references: { model: User, key: "id" },
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.ENUM("Beginner", "Intermediate", "Advanced"),
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false, // e.g., "4 weeks"
  },
  workoutsPerWeek: {
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
  isCompleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = WorkoutPlan;
