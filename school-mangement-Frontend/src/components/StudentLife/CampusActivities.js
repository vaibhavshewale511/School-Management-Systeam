// App.js
import React, { useState, useEffect } from 'react';
import Switch from 'react-switch';
import './CampusActivities.css';
import axios from 'axios';
import { FaCheck, FaGift } from 'react-icons/fa';


const App = () => {
    const [students, setStudents] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [formData, setFormData] = useState({ id: '', name: '', description: '', date: '', timestamp: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3005/students')
            .then(response => setStudents(response.data))
            .catch(error => console.error('There was an error fetching the data!', error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentTimestamp = new Date().toLocaleTimeString(); // get only current time

        if (isEditing) {
            axios.put(`http://localhost:3005/students/${students[currentIndex]._id}`, { ...formData, timestamp: students[currentIndex].timestamp })
                .then(response => {
                    const updatedStudents = students.map((student, index) =>
                        index === currentIndex ? response.data : student
                    );
                    setStudents(updatedStudents);
                    setIsEditing(false);
                    setFormData({ id: '', name: '', description: '', date: '', timestamp: '' });
                })
                .catch(error => console.error('There was an error updating the student!', error));
        } else {
            axios.post('http://localhost:3005/students', { ...formData, timestamp: currentTimestamp })
                .then(response => {
                    setStudents([...students, response.data]);
                    setFormData({ id: '', name: '', description: '', date: '', timestamp: '' });
                })
                .catch(error => console.error('There was an error adding the student!', error));
        }
    };

    const handleEdit = (index) => {
        setCurrentIndex(index);
        setFormData(students[index]);
        setIsEditing(true);
    };

    const handleDelete = (index) => {
        axios.delete(`http://localhost:3005/students/${students[index]._id}`)
            .then(() => {
                const updatedStudents = students.filter((_, i) => i !== index);
                setStudents(updatedStudents);
            })
            .catch(error => console.error('There was an error deleting the student!', error));
    }; 

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div style={{ marginTop: '120px', width: '1000px' }} className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={{ marginLeft: '300px' }}>Student Attendance</h1>
                <div>
                    <Switch onChange={toggleTheme} checked={isDarkMode} />
                    <span>{isDarkMode ? 'Dark' : 'Light'} Mode</span>
                </div>
            </div>
            <form className='form3' onSubmit={handleSubmit}>
                <input name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
                <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input name="description" placeholder="Email Address" value={formData.description} onChange={handleChange} required />
                <input name="date" type="date" value={formData.date} onChange={handleChange} required />
                <button type="submit">{isEditing ? 'Update' : 'Add'} Student</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Date</th>
                        <th>Timestamp</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.description}</td>
                            <td>{student.date}</td>
                            <td>{student.timestamp}</td>
                            
                            <td>
                            <button onClick={() => handleEdit(index)} style={{ marginBottom: '5px', padding: '5px', color: 'green', backgroundColor:'white' }}>
            <FaCheck />
        </button>
        <button onClick={() => handleDelete(index)} style={{ marginBottom: '5px', padding: '5px' }}>
            <FaGift /> Delete
        </button>         </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;