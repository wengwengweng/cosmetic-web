const Sequelize = require('sequelize');
const sequelize = require('../config/db.connect.js');

const user = sequelize.define('user', {
  userId: {
    type: Sequelize.BIGINT(11),
    primaryKey: true,
    allowNull: false,
    unique: true,
    autoIncrement: true
  },
  userName: Sequelize.STRING(255),
  userTel: Sequelize.STRING(255),
  userPwd: Sequelize.STRING(255),
  userMail: Sequelize.STRING(255),
  userBirth: Sequelize.STRING(255),
}, {
  timestamps: false
});

module.exports = user;
