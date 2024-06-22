// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ApplicationForm = require('./ApplicationForm');
const ProjectSubmission = require('./ProjectSubmission');
const Contact = require("./ContactMessage");
const Student = require('./Student'); // Correct import

// Initialize express app
const app = express();
const port = process.env.PORT || 3005;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Ensure the uploads directory exists
const dir = "./uploads";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Faculty schema and model
const FacultySchema = new mongoose.Schema({
  name: String,
  subject: String,
  contact: String,
  email: String,
  picture: String,
  intro: String
});
const Faculty = mongoose.model("FacultyInfo", FacultySchema);

// Routes
app.get("/", (req, res) => {
  res.send("Server running successfully...!");
});

// Faculty routes
app.post("/faculty", upload.single("picture"), async (req, res) => {
  try {
    const { name, subject, contact, email, intro } = req.body;
    const picture = req.file ? req.file.path : null;
    const newFaculty = new Faculty({ name, subject, contact, email, intro, picture });
    await newFaculty.save();
    res.send({ status: "ok", data: newFaculty });
  } catch (error) {
    console.error("Error adding new faculty:", error);
    res.send({ status: "error", data: error });
  }
});

app.get("/faculty", async (req, res) => {
  try {
    const facultyList = await Faculty.find();
    res.send({ status: "ok", data: facultyList });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});

app.put("/faculty/:id", upload.single("picture"), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, subject, contact, email, intro } = req.body;
    const picture = req.file ? req.file.path : null;

    const updatedData = { name, subject, contact, email, intro };
    if (picture) {
      updatedData.picture = picture;
    }

    const updatedFaculty = await Faculty.findByIdAndUpdate(id, updatedData, { new: true });
    res.send({ status: "ok", data: updatedFaculty });
  } catch (error) {
    console.error("Error updating faculty:", error);
    res.send({ status: "error", data: error });
  }
});

app.delete("/faculty/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Faculty.findByIdAndDelete(id);
    res.send({ status: "ok", data: "Faculty deleted" });
  } catch (error) {
    console.error("Error deleting faculty:", error);
    res.send({ status: "error", data: error });
  }
});

// ContactMessage routes
app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    const newContactMessage = new Contact({ name, email, subject, message });
    await newContactMessage.save();
    res.send({ status: "ok", data: newContactMessage });
  } catch (error) {
    console.error("Error adding new contact message:", error);
    res.send({ status: "error", data: error });
  }
});

app.get("/contact", async (req, res) => {
  try {
    const contactMessages = await Contact.find();
    res.send({ status: "ok", data: contactMessages });
  } catch (error) {
    res.send({ status: "error", data: error });
  }
});

app.delete("/contact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Contact.findByIdAndDelete(id);
    res.send({ status: "ok", data: "Contact message deleted" });
  } catch (error) {
    console.error("Error deleting contact message:", error);
    res.send({ status: "error", data: error });
  }
});

// ApplicationForm routes
app.post('/applicationform', upload.single('picture'), async (req, res) => {
  try {
    const { name, email, birth, gender, mobilenumber, nationality, message, address } = req.body;
    const picture = req.file ? req.file.path : null;

    if (!name || !birth || !mobilenumber || !picture || !message) {
      return res.status(400).send({ status: 'error', message: 'All fields are required' });
    }

    const newApplicationForm = new ApplicationForm({
      name,
      email,
      birth,
      gender,
      mobilenumber,
      nationality,
      message,
      address,
      picture
    });
    await newApplicationForm.save();
    res.send({ status: 'ok', data: newApplicationForm });
  } catch (error) {
    console.error('Error adding new ApplicationForm:', error);
    res.status(400).send({ status: 'error', message: error.message });
  }
});

app.get('/applicationform', async (req, res) => {
  try {
    const applicationForms = await ApplicationForm.find();
    res.send({ status: 'ok', data: applicationForms });
  } catch (error) {
    res.status(500).send({ status: 'error', message: error.message });
  }
});

app.delete('/applicationform/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ApplicationForm.findByIdAndDelete(id);
    res.send({ status: 'ok', data: 'ApplicationForm deleted' });
  } catch (error) {
    console.error('Error deleting ApplicationForm:', error);
    res.status(500).send({ status: 'error', message: error.message });
  }
});

// ProjectSubmission routes
app.post('/projectsubmission', upload.single('picture'), async (req, res) => {
  try {
    const { projectName, description, startDate, endDate, teamMembers, projectLink, projectGuideName, department } = req.body;
    const picture = req.file ? req.file.path : null;

    if (!projectName || !description || !startDate || !endDate || !teamMembers || !projectLink || !projectGuideName || !department) {
      return res.status(400).send({ status: 'error', message: 'All fields are required' });
    }

    const newProjectSubmission = new ProjectSubmission({
      projectName,
      description,
      startDate,
      endDate,
      teamMembers,
      projectLink,
      projectGuideName,
      department,
      picture
    });
    await newProjectSubmission.save();
    res.send({ status: 'ok', data: newProjectSubmission });
  } catch (error) {
    console.error('Error adding new ProjectSubmission:', error);
    res.status(400).send({ status: 'error', message: error.message });
  }
});

app.get('/projectsubmission', async (req, res) => {
  try {
    const projectSubmissions = await ProjectSubmission.find();
    res.send({ status: 'ok', data: projectSubmissions });
  } catch (error) {
    res.status(500).send({ status: 'error', message: error.message });
  }
});

app.delete('/projectsubmission/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await ProjectSubmission.findByIdAndDelete(id);
    res.send({ status: 'ok', data: 'ProjectSubmission deleted' });
  } catch (error) {
    console.error('Error deleting ProjectSubmission:', error);
    res.status(500).send({ status: 'error', message: error.message });
  }
});

// Student routes
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/students", async (req, res) => {
  const { id, name, description, date, timestamp } = req.body;
  const newStudent = new Student({ id, name, description, date, timestamp });

  try {
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.put("/students/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, date, timestamp } = req.body;

  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      { name, description, date, timestamp },
      { new: true }
    );
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.delete("/students/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Student.findByIdAndDelete(id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


//result
const resultSchema = new mongoose.Schema({
  name: String,
  marks: Number,
  grade: String,
});

const Result = mongoose.model('Result', resultSchema);

app.get('/results', async (req, res) => {
  try {
      const results = await Result.find();
      res.json(results);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));