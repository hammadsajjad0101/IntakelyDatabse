const { sequelize } = require('./models');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully seq!');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
})();