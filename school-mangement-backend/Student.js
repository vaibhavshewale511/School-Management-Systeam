// Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    date: String,
    timestamp: String,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;