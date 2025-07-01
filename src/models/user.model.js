const Sequelize = require("sequelize");
const sequelizeConfig = require("../config/db.config");

const User = sequelizeConfig.define(
  "users",
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    firstName: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
    lastName: {
      allowNull: false,
      type: Sequelize.STRING(50),
    },
    role: {
      // e.g., ADMIN, MANAGER, RECEPTIONIST, TRAINER, ACCOUNTANT, MEMBER
      allowNull: false,
      type: Sequelize.STRING(30),
      defaultValue: "Member",
    },
    status: {
      allowNull: false,
      type: Sequelize.STRING(30),
      defaultValue: "ACTIVE",
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING(100),
    },
    phoneNumber: {
      allowNull: false,
      type: Sequelize.STRING(20),
    },
    password: {
      allowNull: false,
      type: Sequelize.STRING(255),
    },
    gender: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    joinDate: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    address: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
    profileImage: {
      allowNull: true,
      type: Sequelize.STRING(300),
    },
    coverImage: {
      allowNull: true,
      type: Sequelize.STRING(300),
    },
    isVerified: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    emergencyContact: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    token: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    adharNumber: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    managedByAdminId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
  },
  {
    tableName: "users",
    timestamps: true,
    indexes: [
      { fields: ["id"] },
      { fields: ["firstName"] },
      { fields: ["lastName"] },
    ],
  }
);

module.exports = User;
