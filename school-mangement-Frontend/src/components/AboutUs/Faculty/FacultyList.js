import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Table, Modal, Image } from 'react-bootstrap';
import axios from 'axios';

const FacultyList = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    contact: '',
    email: '',
    picture: null,
    intro: ''
  });

  const [facultyList, setFacultyList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchFacultyList();
  }, []);

  const fetchFacultyList = async () => {
    try {
      const response = await axios.get('http://localhost:3005/faculty');
      setFacultyList(response.data.data);
    } catch (error) {
      console.error('Error fetching faculty data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'picture') {
      setFormData({
        ...formData,
        picture: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('subject', formData.subject);
    formDataToSubmit.append('contact', formData.contact);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('picture', formData.picture);
    formDataToSubmit.append('intro', formData.intro);

    try {
      if (editIndex !== null) {
        await axios.put(`http://localhost:3005/faculty/${facultyList[editIndex]._id}`, formDataToSubmit, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.post('http://localhost:3005/faculty', formDataToSubmit, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }
      fetchFacultyList();
      resetForm();
      setShowModal(false);
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  const handleEdit = (index) => {
    const facultyToEdit = facultyList[index];
    setFormData({
      ...facultyToEdit,
      picture: null // Reset the picture field for edit
    });
    setEditIndex(index);
    setShowModal(true);
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`http://localhost:3005/faculty/${facultyList[index]._id}`);
      fetchFacultyList();
    } catch (error) {
      console.error('Error deleting faculty:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      subject: '',
      contact: '',
      email: '',
      picture: null,
      intro: ''
    });
    setEditIndex(null);
  };

  return (
    <Container style={{ marginTop: '100px' }}>
      <h2 className="mt-4 mb-3">Faculty Details</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="subject">
          <Form.Label>Special Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="contact">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="picture">
          <Form.Label>Profile Picture</Form.Label>
          <Form.Control
            type="file"
            name="picture"
            onChange={handleChange}
            accept="image/*"
          />
        </Form.Group>
        <Form.Group controlId="intro">
          <Form.Label>Introduction</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="intro"
            value={formData.intro}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editIndex !== null ? 'Update' : 'Submit'}
        </Button>
      </Form>

      <Table striped bordered hover className="mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Special Subject</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Profile Picture</th>
            <th>Introduction</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {facultyList.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty.name}</td>
              <td>{faculty.subject}</td>
              <td>{faculty.contact}</td>
              <td>{faculty.email}</td>
              <td>
                {faculty.picture && (
                  <Image
                    src={`http://localhost:3005/${faculty.picture}`}
                    alt={faculty.name}
                    thumbnail
                  />
                )}
              </td>
              <td>{faculty.intro}</td>
              <td>
                <Button variant="info" onClick={() => handleEdit(index)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Faculty Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Button variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default FacultyList;
