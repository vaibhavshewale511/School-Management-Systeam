import React, { useState } from 'react';
import './SportsRecreation.css';

const SportsRecreation = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div className="container-fluid">
        <img
          src={process.env.PUBLIC_URL + '/Navbar/sports.jpg'}
          height="600px"
          width="1200px"
          className="d-block align-top image"
          alt="Logo"
        />
        <div className="aboutmiddle">
          <div className="abouttext">
            <h2 style={{color:'black'}}>Sports</h2>
           
          </div>
        </div>
      </div>

      <br /><br /><br /><br />

      {/* Second Page Department */}
      <div className="goku_vegeta_box ex_mg_tb">
        <img 
          src="http://ryangroup.org/public/images/front_end/template-images/sports_1600933493.jpg" 
          alt="Learner Centered Pedagogy - Ryan Group" 
          className="rynbox_sm rynbox_1" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} 
        />
        <div className={`goku_vegeta_in goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
          <p>At Ryan, we firmly believe that participation in sports is an essential part of the learning process. We build the ecosystem for sports and physical development for children. This includes equipment, specialists, tournaments, physical infrastructure, national and international associations, and sports exchange programs.<br></br>

We collaborate with the best in the country like TENVIC- Cricket Coaching with Anil Kumble, Mahesh Bhupathi Tennis Academy, Junior NBA, La Liga etc. along with organising various sports camps and tournaments at the local and national level.<br></br>

We train our students in Cricket, Swimming, Table Tennis, Lawn Tennis, Basketball, Football, Hockey, Athletics, Rugby, Martial Arts - Karate, Judo, Taekwondo</p>
          <div className="clerfix"></div>
        </div>
        <div className="clerfix"></div>
      </div>
     
<br></br><br></br><br></br><br></br>
    {/* Third Page Department */}

    <div className="goku_vegeta_box1 ex_mg_tb">
      <img src="http://ryangroup.org/public/images/front_end/template-images/ryan-minithon_1607537857.jpg" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in1 goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
      <p>At Ryan, we firmly believe that participation in sports is an essential part of the learning process. We build the ecosystem for sports and physical development for children. This includes equipment, specialists, tournaments, physical infrastructure, national and international associations, and sports exchange programs.<br></br>

We collaborate with the best in the country like TENVIC- Cricket Coaching with Anil Kumble, Mahesh Bhupathi Tennis Academy, Junior NBA, La Liga etc. along with organising various sports camps and tournaments at the local and national level.<br></br>

We train our students in Cricket, Swimming, Table Tennis, Lawn Tennis, Basketball, Football, Hockey, Athletics, Rugby, Martial Arts - Karate, Judo, Taekwondo</p>
        <div className="clerfix"></div>
      </div>
      <div className="clerfix"></div>

    </div>

    <br></br><br></br><br></br><br></br>

      {/* four Page Department */}
      <div className="goku_vegeta_box ex_mg_tb">
        <img 
          src="https://img.freepik.com/premium-photo/kids-playing-sports_1108314-123853.jpg?w=800" 
          alt="Learner Centered Pedagogy - Ryan Group" 
          className="rynbox_sm rynbox_1" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} 
        />
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

    <div className="goku_vegeta_box1 ex_mg_tb">
      <img src="https://img.freepik.com/premium-photo/kids-playing-sports_1108314-124363.jpg?w=800" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in1 goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
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
      {/* Six Page Department */}
      <div className="goku_vegeta_box ex_mg_tb">
        <img 
          src="https://img.freepik.com/premium-photo/kids-playing-sports_1108314-124510.jpg?w=800" 
          alt="Learner Centered Pedagogy - Ryan Group" 
          className="rynbox_sm rynbox_1" 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} 
        />
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
    {/* Seven Page Department */}

    <div className="goku_vegeta_box1 ex_mg_tb">
      <img src="https://img.freepik.com/premium-photo/kids-playing-sports_1108314-124673.jpg?w=800" alt="Learner Centered Pedagogy - Ryan Group" className="rynbox_sm rynbox_1"onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)} />
      <div className={`goku_vegeta_in1 goku_in wow slideInRight nd_txs ${isHovered ? 'show-text' : ''}`}>
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

export default SportsRecreation;
