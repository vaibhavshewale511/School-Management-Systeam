// models/ApplicationForm.js
const mongoose = require('mongoose');

const applicationFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  birth: { type: Date, required: true },
  gender: { type: String, required: true },
  mobilenumber: { type: String, required: true },
  picture: { type: String, required: true },
  nationality: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String, required: true }
});

const ApplicationForm = mongoose.model('ApplicationForm', applicationFormSchema);

module.exports = ApplicationForm;