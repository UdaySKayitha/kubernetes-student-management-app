const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('student_db', 'root', 'password', {
  host: 'mysql-service',
  dialect: 'mysql',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;

