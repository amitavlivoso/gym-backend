const Sequelize = require("sequelize");
const sequelizeConfig = require("../config/db.config");
const User = require("./user.model");

const Payment = sequelizeConfig.define(
  "payments",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: User, key: "id" },
      allowNull: false,
    },
    planName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    amount: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "PAID",
    },
    method: {
      type: Sequelize.STRING,
    },
    paidAt: {
      type: Sequelize.DATEONLY,
      defaultValue: Sequelize.NOW,
    },
    expiresAt: { type: Sequelize.DATEONLY },
  },
  {
    tableName: "payments",
    timestamps: true,
  }
);

module.exports = Payment;
