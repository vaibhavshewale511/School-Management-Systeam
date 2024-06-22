import React, { useState } from 'react';
import './Department.css';



const Department = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
     <div className="container-fluid">
        <img
          src={process.env.PUBLIC_URL + '/Navbar/acd.jpg'}
          height="600px"
          width="1200px"
          className="d-block align-top image"
          alt="Logo"
        />
        <div className='aboutmiddle'>
          <div className='abouttext'>
            <h2>Department</h2>
            <p>Our History is to become a global role model for teaching and learning.</p>
          </div>
        </div>
      </div>

      <br/><br/><br/><br/>

{/* Seconf Page Department */}

<div className="goku_vegeta_box ex_mg_tb">
      <img src="http://ryangroup.org/public/images/front_end/template-images/montessori_school_1600931032.jpg" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
        <p><b>Learner Centered Pedagogy</b></p>
        <p>What constructs a well-structured teaching module? An effective pedagogy. Pedagogy is the science of teaching or education. Our pedagogy is based on </p>
        <ul>
          <li>Activity Based Learning</li>
          <li>Collaborative Learning</li>
          <li>Experiential Learning</li>
        </ul>
        <p>Ultimately, we aim to blend consistency and variety in teaching methods by combining established learning theories with innovative practices and programs. These aim to help students improve their learning outcomes and achieve their full potential.</p>
        <div className="clerfix"></div>
      </div>
      <div className="clerfix"></div>

    </div> 
<br></br><br></br><br></br><br></br>
    {/* Third Page Department */}

    <div className="goku_vegeta_box ex_mg_tb">
      <img src="https://www.ryangroup.org/public/images/front_end/template-images/primary_school_1600931032.jpg" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
        <p><b>Learner Centered Pedagogy</b></p>
        <p>What constructs a well-structured teaching module? An effective pedagogy. Pedagogy is the science of teaching or education. Our pedagogy is based on </p>
        <ul>
          <li>Activity Based Learning</li>
          <li>Collaborative Learning</li>
          <li>Experiential Learning</li>
        </ul>
        <p>Ultimately, we aim to blend consistency and variety in teaching methods by combining established learning theories with innovative practices and programs. These aim to help students improve their learning outcomes and achieve their full potential.</p>
        <div className="clerfix"></div>
      </div>
      <div className="clerfix"></div>

    </div>


    <br></br><br></br><br></br><br></br>
    {/* four Page Department */}

    <div className="goku_vegeta_box ex_mg_tb">
      <img src="https://www.ryangroup.org/public/images/front_end/template-images/senior_schoo2_1600931264.jpg" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
        <p><b>Learner Centered Pedagogy</b></p>
        <p>What constructs a well-structured teaching module? An effective pedagogy. Pedagogy is the science of teaching or education. Our pedagogy is based on </p>
        <ul>
          <li>Activity Based Learning</li>
          <li>Collaborative Learning</li>
          <li>Experiential Learning</li>
        </ul>
        <p>Ultimately, we aim to blend consistency and variety in teaching methods by combining established learning theories with innovative practices and programs. These aim to help students improve their learning outcomes and achieve their full potential.</p>
        <div className="clerfix"></div>
      </div>
      <div className="clerfix"></div>

    </div>

    <br></br><br></br><br></br><br></br>
    {/* five Page Department */}

    <div className="goku_vegeta_box ex_mg_tb">
      <img src="https://www.ryangroup.org/public/images/front_end/template-images/studentslife-atal_1607340096.jpg" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
        <p><b>Learner Centered Pedagogy</b></p>
        <p>What constructs a well-structured teaching module? An effective pedagogy. Pedagogy is the science of teaching or education. Our pedagogy is based on </p>
        <ul>
          <li>Activity Based Learning</li>
          <li>Collaborative Learning</li>
          <li>Experiential Learning</li>
        </ul>
        <p>Ultimately, we aim to blend consistency and variety in teaching methods by combining established learning theories with innovative practices and programs. These aim to help students improve their learning outcomes and achieve their full potential.</p>
        <div className="clerfix"></div>
      </div>
      <div className="clerfix"></div>

    </div>


    <br></br><br></br><br></br><br></br>
    {/* six Page Department */}

    <div className="goku_vegeta_box ex_mg_tb">
      <img src="https://www.ryangroup.org/public/images/front_end/template-images/Innovation-Lab_1607340096.jpg" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
        <p><b>Learner Centered Pedagogy</b></p>
        <p>What constructs a well-structured teaching module? An effective pedagogy. Pedagogy is the science of teaching or education. Our pedagogy is based on </p>
        <ul>
          <li>Activity Based Learning</li>
          <li>Collaborative Learning</li>
          <li>Experiential Learning</li>
        </ul>
        <p>Ultimately, we aim to blend consistency and variety in teaching methods by combining established learning theories with innovative practices and programs. These aim to help students improve their learning outcomes and achieve their full potential.</p>
        <div className="clerfix"></div>
      </div>
      <div className="clerfix"></div>

    </div>


    </div>
  );
};

export default Department;
