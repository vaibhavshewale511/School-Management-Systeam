const mongoose = require("mongoose");

const facultyDetailsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    subject: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    picture: { type: String }, // Store image URL or path
    intro: { type: String }
  },
  {
    collection: "FacultyInfo",
  }
);

mongoose.model("FacultyInfo", facultyDetailsSchema);
