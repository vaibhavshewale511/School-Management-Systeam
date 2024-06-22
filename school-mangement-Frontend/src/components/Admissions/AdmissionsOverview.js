import React, { Component } from "react";
// import "../../CSS/AdmissionsOverview.css";
//import bench_img from "../../images/bench_img.jpeg";
//import stu_img from "../../images/stu_img.jpeg";
import teacher_teaching from "../../images/teacher_teaching.jpg";
import home1 from "../../images/home1.jpg";
//import five4 from "../../images/five4.jpg";
// import AdmissionEnquiry from "./Forms/AdmissionEnquiry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileMedical,
  faHome,
  faPassport,
  faCertificate,
} from "@fortawesome/free-solid-svg-icons";
export class AdmissionsOverview extends Component {
  render() {
    return (
      <div>
        <div className="vignette-container w-100" style={{}}>
          <img src={teacher_teaching} className="bg-image w-100" alt="City" />
          <div className="centered" style={{}}>
            <h1 class="display-1 text-white mb-4"><strong>Join Us</strong></h1>
            <h4 class="text-dark mb-4">
              Embark on an Epic Journey of Learning and Adventure at Our School!
            </h4>
            <div class="mbr-section-btn">
              <a
                class="btn btn-outline-success bg-success text-white btn-lg"
                href="dfgd"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
        <div className="stepper">
          <div className="container mt-5">
            <h3>INTERNATIONAL SCHOOL ADMISSION PROCESS</h3>
            <div className="container row m-5 col-md-12 justify-content-center">
              <Circle1 text="Step 1: Contact Us" />
              <Circle1 text="Step 2: Campus Visit or Meeting" />
              <Circle1 text="Step 3: Submit Application Form" />
              <Circle1 text="Step 4: Payment Of Term 1 Fees" />
              <Circle1 text="Step 5: Documentation" />
            </div>
          </div>
        </div>
        <div className="container row m-5 col-md-12 step-block">
          <div className="col-md-2">
            <Circle2 text="Step 1" />
          </div>
          <div className="col-md-10">
            <h2>Contact us if you need support</h2>
            <p>
              You have the privilege to raise a query for any information
              required towards the admission process in tokyo campuses. ‍ To
              provide you with a seamless and smooth admission process at GIIS
              tokyo, a few options are given which you can choose from to take a
              definitive step in going ahead for the admission process. To begin
              with, get in touch with us through a call, or by filling in your
              details or writing to us.
            </p>
          </div>
        </div>

        <div className="container ">
          <div className="row col-md-12">
            <div className="col-md-2"></div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="admission-enquiry ">
               
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img
                src={home1}
                style={{ width: "500px", height: "auto" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="container row m-5 col-md-12 step2-block">
          <div className="col-md-2">
            <Circle2 text="Step 2" />
          </div>
          <div className="col-md-5">
            <h2>Visit Our Campus (or)Attend Our Virtual Counselling</h2>
            <p>
              Our Admissions Team is committed to helping you every step of the
              way. ‍ Time being the most valuable criteria today, once you
              contact us in any form our counsellors will notify you via email
              or call and offer the facility of in-person or a virtual campus
              tour. Parents and students can take advantage of this tour to get
              first-hand information on the school offerings, student life, and
              benefits. Virtual meetings are with counselors to understand the
              admission process , the various curriculums and subjects offered.
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <img
              src={home1}
              style={{ width: "500px", height: "auto" }}
              alt=""
            />
          </div>
        </div>
        <div className="container row m-5 col-md-12 step2-block">
          <div className="col-md-2">
            <Circle2 text="Step 3" />
          </div>
          <div className="col-md-3">
            <h2>Submit Application Form</h2>
          </div>
          <div className="col-md-7">
            <p>
              Once the student completes the application form, they need to
              submit it along with the required documents. At the time of the
              admission process, the student needs to pay a one-time
              registration fee that is non-refundable and is the confirmation of
              the seat. Students seeking scholarships have different forms to
              fill out and there are scholarship experts to guide you.
              Shortlisted candidates will need to undergo a different admission
              process.
            </p>
          </div>
        </div>
        <div className="container row m-5 col-md-12 step2-block">
          <div className="col-md-2">
            <Circle2 text="Step 4" />
          </div>
          <div className="col-md-3">
            <h2>Payment Of Term 1 Fees</h2>
          </div>
          <div className="col-md-7">
            <p>
              Once the student meets the required criteria and satisfactorily
              completes all the admission procedures, the first term fees need
              to be paid before the commencement of the school and are prorated
              for admissions in the middle of the academic year. process.
            </p>
          </div>
        </div>
        <div className="container row m-5 col-md-12 step2-block">
          <div className="col-md-2">
            <Circle2 text="Step 5" />
          </div>
          <div className="col-md-3">
            <h2>Documentation</h2>
          </div>
          <div className="col-md-7">
            <p>
              Documentation is one of the important steps involved. GIIS has
              made the documentation simple and easy, which is listed below.
              Without submitting the proper documentation, the applications will
              be rejected.
            </p>
          </div>
        </div>
        <div className="container col-md-12">
          <div className=" mt-5">
            <div className="row">
              <Circle3 icon={faCertificate} description="Birth Certificate" />
              <Circle3 icon={faHome} description="Proof Of Residential Address"/>
              <Circle3 icon={faPassport} description="Child’s Recent Passport Size Photo" />
              <Circle3 icon={faFileMedical} description="Medical Certificate"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Circle1 extends Component {
  render() {
    return (
      <div className="circle-block col-md-3 col-sm-6">
        <div className="circle1">
          <strong>{this.props.text}</strong>
        </div>
      </div>
    );
  }
}
class Circle2 extends Component {
  render() {
    return (
      <div className="circle-block col-md-3 col-sm-6">
        <div className="circle2">
          <strong>{this.props.text}</strong>
        </div>
      </div>
    );
  }
}
class Circle3 extends Component {
  render() {
    return (
      <div className="col-md-3 col-sm-6">
      <div className="circle-block-2 ">
        <div className="circle3">
          <FontAwesomeIcon icon={this.props.icon} />
          {/* <strong>{this.props.text}</strong> */}
        </div>
      </div>
      <div className="circle-text">
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default AdmissionsOverview;
