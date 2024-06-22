import React, { useState } from 'react';
import './Projects.css';

const ProjectSubmissionForm = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    startDate: '',
    endDate: '',
    teamMembers: '',
    projectLink: '',
    projectGuideName: '',
    department: '',
    picture: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      picture: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await fetch('http://localhost:3005/projectsubmission', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form data submitted successfully:', result);
      } else {
        console.error('Error submitting form data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
   <div>
<br></br><br></br><br></br>
<div className="container mt-5 ">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project Submission</h5>
          <p className="card-text">Please follow the instructions and guidelines below for your project submission.</p>
        </div>
        </div>
      <div className="mt-3 p-3 border border-secondary">
        <h6>Submission Instructions:</h6>
        <ul>
          <li>Ensure your project is completed and tested.</li>
          <li>Submit your project files in a single ZIP archive.</li>
          <li>Name the ZIP archive with your project title and your name (e.g., ProjectName_YourName.zip).</li>
          <li>Upload the ZIP file to the submission portal.</li>
        </ul>
        <h6>Guidelines:</h6>
        <ul>
          <li>Follow the project requirements as specified in the project brief.</li>
          <li>Write clean and well-documented code.</li>
          <li>Include a README file with instructions on how to set up and run your project.</li>
          <li>Adhere to the submission deadline.</li>
        </ul>
      </div>
    </div>
   

     <form className='form1' onSubmit={handleSubmit}>
    <h2 style={{textAlign:'center'}}>Project Submission</h2>
      <div>
        <label>
          Project Name:
          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </label>
      </div>
      <div>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Team Members:
          <input
            type="text"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleChange}
            placeholder="Comma separated names"
          />
        </label>
      </div>
      <div>
        <label>
          Project Link:
          <input
            type="url"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Project Guide Name:
          <input
            type="text"
            name="projectGuideName"
            value={formData.projectGuideName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Project File:
          <input
            type="file"
            name="picture"
            onChange={handleFileChange}
          />
        </label>
      </div>
      <button type="submit">Submit Project</button>
    </form>
   </div>
  );
};

export default ProjectSubmissionForm;