import "../styles/edu.css";
import React from "react";
import {useState} from "react";

function Edu(props) {
  const [education, setEducation] = useState([]);
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [program, setProgram] = useState('');
  const [dateGrad, setDateGrad] = useState('');

  const handleSubmit = (school, degree, program, dateGrad) => {
    const edu = {
      school: school,
      degree: degree,
      program: program,
      dateGrad: dateGrad
    };
    const next = [...education, edu];
    setEducation(next);
    props.onDataReceived(next, 'edu');
    clearForm();
  };

  const clearForm = () => {
    setSchool('');
    setDegree('');
    setProgram('');
    setDateGrad('');
  }
  return (
    <>
      
        
        <form id="eduForm" onSubmit={(e) => {e.preventDefault(); handleSubmit() }}>
          <div className="school">
            <div className="formFields">
              <label htmlFor="schoolName" className="eduLabel">Name of the issuing entity:</label>
              <input
                type="text"
                name="schoolName"
                id="schoolName"
                placeholder="University of Somewhere"
                value={school}
                onChange= {(e) => setSchool(e.target.value)}
              ></input>
            </div>
            <div className="formFields">
              <label htmlFor="degree" className="eduLabel">
                Enter the Degree or Certificate you received:</label>
              <input
                type="text"
                name="degree"
                id="degree"
                placeholder="Bachelors of Science"
                value={degree}
                onChange= {(e) => setDegree(e.target.value)}
              ></input>
            </div>
            <div className="formFields">
              <label htmlFor="program" className="eduLabel">
                What program the degree is in:</label>
              <input
                type="text"
                name="program"
                id="program"
                placeholder="Computer Science"
                value={program}
                onChange= {(e) => setProgram(e.target.value)}
              ></input>
            </div>
            <div className="formFields">
              <label htmlFor="completed" className="eduLabel">When did you graduate:</label>
              <input
                type="month"
                name="completed"
                id="completed"
                placeholder="04/2025"
                value={dateGrad}
                onChange= {(e) => setDateGrad(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="btnCtr">
          <button id="confirmEdu" className="globalBtn" onClick={(e) => {e.preventDefault(); handleSubmit(school, degree, program, dateGrad); }}>
            Confirm
          </button>
          </div>
        </form>
      
    </>
  );
}
export default Edu;
