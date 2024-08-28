const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./config/db.config.js');
const studentRoutes = require('./routes/student.routes.js');

app.use(cors());
app.use(express.json());

db.sequelize.sync()
  .then(() => {
    console.log('Synced database');
  })
  .catch((err) => {
    console.log('Failed to sync database: ' + err.message);
  });

app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

