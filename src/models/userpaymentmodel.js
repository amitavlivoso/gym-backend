const Sequelize = require("sequelize");
const sequelizeConfig = require("../config/db.config");
const User = require("./user.model");

const userPayment = sequelizeConfig.define("userpayment", {
  userId: {
    type: Sequelize.INTEGER,
    references: { model: User, key: "id" },
    allowNull: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  period: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  features: {
    type: Sequelize.JSON,
    allowNull: true,
  },
  popular: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = userPayment;
