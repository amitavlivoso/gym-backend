const Sequelize = require("sequelize");
const sequelizeConfig = require("../config/db.config");
const User = require("./user.model");

const Attendance = sequelizeConfig.define("attendance", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: { model: User, key: "id" },
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  checkInTime: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  checkOutTime: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = Attendance;
