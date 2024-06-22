import React, { useState } from 'react';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    birth: '',
    gender: '',
    mobilenumber: '',
    nationality: '',
    address: '',
    picture: null,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'picture') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0] // Only take the first file
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    try {
      const response = await fetch('http://localhost:3005/applicationform', {
        method: 'POST',
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.status === 'ok') {
        alert('Application submitted successfully');
        setFormData({
          name: '',
          email: '',
          birth: '',
          gender: '',
          mobilenumber: '',
          nationality: '',
          address: '',
          picture: null,
          message: ''
        });
      } else {
        alert('Error submitting application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting application');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '120px', width: '100%', display: 'flex', justifyContent: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '800px', marginTop: '20px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center' }}>Application Form</h2>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Student Full Name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="date"
            id="birth"
            name="birth"
            value={formData.birth}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          >
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            id="mobilenumber"
            name="mobilenumber"
            placeholder="Mobile Number"
            value={formData.mobilenumber}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handleChange}
            accept="image/*"
            style={{ width: '100%', backgroundColor: 'white', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            id="nationality"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          ></textarea>
        </div>
        <div style={{ marginBottom: '20px' }}>
          <textarea
            id="address"
            name="address"
            rows="4"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc', marginBottom: '10px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ background: 'green', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ApplicationForm;
