import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Toppers = () => {
    const [results, setResults] = useState([]);
    const [show, setShow] = useState(false);

    const fetchResults = async () => {
        try {
            const response = await axios.get('http://localhost:3005/results');
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching the results:', error);
        }
    };

    useEffect(() => {
        if (show) {
            const interval = setInterval(fetchResults, 5000); // Poll every 5 seconds
            return () => clearInterval(interval);
        }
    }, [show]);

    return (
       <div>
        
            <div className="container mt-5">
                <div className="card" style={{marginTop:'90px'}}>
                    <div className="card-body">
                        <h5 className="card-title">Student Achievement</h5>
                        <p className="card-text">Where Excellence is a Tradition and Achievement Knows No Bounds</p>
                    </div>
                </div>
                <div className="mt-3 p-3 border border-secondary">
                    <ul>
                        <p>We are proud to recognize the outstanding achievements of our peers. Their dedication and hard work have set new benchmarks of excellence. Congratulations to all for their remarkable accomplishments and contributions to our success!</p>
                    </ul>
                    <h6>Sports Achievement:</h6>
                    <ul>
                        <p>Our basketball team clinched the championship title in the regional tournament, demonstrating exceptional skill and teamwork.
                        The track and field athletes broke multiple school records, showcasing their speed and endurance.
                        The soccer team reached the finals in the state league, displaying remarkable coordination and strategy.
                        Congratulations</p>
                    </ul>
                </div>
            </div>

<div className="container mt-5">
            <button className="btn btn-primary mb-3" onClick={() => { fetchResults(); setShow(true); }}>Show our toppers</button>
            {show && (
                <div>
                    <h2 className="mb-3">Our Toppers</h2>
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Marks</th>
                                <th scope="col">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result, index) => (
                                <tr key={index}>
                                    <td>{result.name}</td>
                                    <td>{result.marks}</td>
                                    <td>{result.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
       </div>
    );
};

export default Toppers;