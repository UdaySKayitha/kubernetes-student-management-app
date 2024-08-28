const express = require('express');
const router = express.Router();
const db = require('../config/db.config.js');
const Student = db.sequelize.models.student;

// Create a new Student
router.post('/', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Retrieve all Students
router.get('/', async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

