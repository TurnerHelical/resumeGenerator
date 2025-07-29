import "../styles/edu.css";
import React from "react";

function Edu() {
  return (
    <>
      <div id="eduCtr">
        <h2>Education</h2>
        <form>
          <div className="school">
            <div className="formFields">
              <label htmlFor="schoolName" className="eduLabel">Name of the issuing entity:</label>
              <input
                type="text"
                name="schoolName"
                id="schoolName"
                placeholder="University of Somewhere"
              ></input>
            </div>
            <div className="formFields">
              <label htmlFor="degree" className="eduLabel">
                Enter the Degree or Certificate you received:</label>
              <input
                type="text"
                name="degree"
                id="degree"
                placeholder="Bachelors of Science in something relevant"
              ></input>
            </div>
            <div className="formFields">
              <label htmlFor="completed" className="eduLabel">When did you graduate:</label>
              <input
                type="date"
                name="completed"
                id="completed"
                placeholder="01/01/01"
              ></input>
            </div>
          </div>
          <div className="btnCtr">
          <button id="anotherEdu" className="globalBtn">
            Add Another
          </button>
          <button id="confirmEdu" className="globalBtn">
            Confirm
          </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Edu;
