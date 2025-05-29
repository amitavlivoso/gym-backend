const nodemailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
require("dotenv").config();

const sendEmail = async (email, title, name, password) => {
  const templatePath = path.join(__dirname, "../views/emailTamplet.ejs");

  const html = await ejs.renderFile(templatePath, {
    title,
    name,
    email,
    password,
  });

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Livoso" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: title,
    html,
  });
};

module.exports = sendEmail;
