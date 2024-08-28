module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define('student', {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
  });

  return Student;
};

