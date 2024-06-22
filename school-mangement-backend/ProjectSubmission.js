const mongoose = require('mongoose');

const projectSubmissionSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  teamMembers: { type: String, required: true },
  projectLink: { type: String, required: true },
  projectGuideName: { type: String, required: true },
  department: { type: String, required: true },
  picture: { type: String }
});

const ProjectSubmission = mongoose.model('ProjectSubmission', projectSubmissionSchema);

module.exports = ProjectSubmission;
