import React from 'react';
import './ReaserchArea.css';

const Projects = () => {
  const divStyle = {
    background: 'url(https://cdn.pixabay.com/photo/2015/12/15/06/42/kids-1093758_1280.jpg) center center no-repeat',
    backgroundSize: 'cover',
    minHeight: '450px'
  };

  return (
    <div>
      <div className="container-fluid">
        <img
          src={process.env.PUBLIC_URL + '/Navbar/services.jpg'}
          height="400px"
          width="1200px"
          className="d-block align-top image"
          alt="Logo"
        />
        <div className='aboutmiddle'>
          <div className='abouttext'>
            <h2>School History</h2>
            <p>Our History is to become a global role model for teaching and learning.</p>
          </div>
        </div>
      </div>
      <div className="contentAreaWhite">
        <div className="colImg imgEd" style={divStyle}></div>
        <div className="mainContentArea">
          <h3>Academic Programming</h3>
          <p style={{ textAlign: 'left' }}>
            Hope Academy offers a comprehensive curriculum aligned with Connecticut State Standards.
          </p>
          <p>&nbsp;</p>
          <div className="button default">
            <p>
              <button className='btn btn-primary'><a href="/Academic-Programming">Learn More</a></button>
            </p>
          </div>
        </div>
      </div>

      <div className="contentAreaWhite1">
        <div className="mainContentArea1">
          <h3>Academic Programming</h3>
          <p style={{ textAlign: 'left' }}>
            Hope Academy offers a comprehensive curriculum aligned with Connecticut State Standards.
          </p>
          <p>&nbsp;</p>
          <div className="button default">
            <p>
              <button className='btn btn-primary'><a href="/Academic-Programming">Learn More</a></button>
            </p>
          </div>
        </div>
        <div className="colImg1 imgEd1" style={divStyle}></div>
      </div>

      <div className="contentAreaWhite">
        <div className="colImg imgEd" style={divStyle}></div>
        <div className="mainContentArea">
          <h3>Academic Programming</h3>
          <p style={{ textAlign: 'left' }}>
            Hope Academy offers a comprehensive curriculum aligned with Connecticut State Standards.
          </p>
          <p>&nbsp;</p>
          <div className="button default">
            <p>
              <button className='btn btn-primary'><a href="/Academic-Programming">Learn More</a></button>
            </p>
          </div>
        </div>
      </div>

      <div className="contentAreaWhite1">
        <div className="mainContentArea1">
          <h3>Academic Programming</h3>
          <p style={{ textAlign: 'left' }}>
            Hope Academy offers a comprehensive curriculum aligned with Connecticut State Standards.
          </p>
          <p>&nbsp;</p>
          <div className="button default">
            <p>
              <button className='btn btn-primary'><a href="/Academic-Programming">Learn More</a></button>
            </p>
          </div>
        </div>
        <div className="colImg1 imgEd1" style={divStyle}></div>
      </div>
    </div>
  );
};

export default Projects;
