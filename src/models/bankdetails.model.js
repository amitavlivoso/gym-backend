const Sequelize = require("sequelize");
const sequelizeConfig = require("../config/db.config");
const User = require("./user.model");

const BankDetails = sequelizeConfig.define(
  "banks",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    userId: {
      type: Sequelize.INTEGER,
      references: { model: User, key: "id" },
      allowNull: false,
    },
    bankName: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    AccNo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    IFSC: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "banks",
    timestamps: true,
  }
);

module.exports = BankDetails;
