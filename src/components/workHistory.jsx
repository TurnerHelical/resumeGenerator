import React from "react";
import "../styles/workHistory.css";

function WorkHistory() {
  return (
    <>
      
        
        <form id="whForm">
            <div className="jobInfo">
              <label htmlFor="company" className="whLabel">Company Name:</label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Stuff Inc"
              ></input>
            </div>
            <div className="jobInfo">
              <label htmlFor="jobTitle" className="whLabel">Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Jester"
              ></input>
            </div>
            <div className="jobInfo" >
              <label htmlFor="tasks" className="whLabel">Responsibilities:</label>
              <input
                type="textArea"
                name="tasks"
                id="tasks"
                placeholder="Jester"
              ></input>
              <button id="taskButton">+</button>
            </div>
            <div id="taskListCtr">
              <ul id="listOfTasks">
                <li>Task</li>
                <li>Task</li>
                <li>Task</li>
              </ul>
            </div>
            
            <div id="dateRangeCtr">
              <p>When did you work there:</p>
              <div id="dateRange">
                <label htmlFor="startDate">Start Date:</label>
                <input type="month" name="startDate" id="startDate"></input>
              
              
                <label htmlFor="endDate">End Date:</label>
                <input type="month" name="endDate" id="endDate"></input>
              </div>
              </div>
          <div id="jobBtnCtr">
          <button id="anotherJob" className="globalBtn">
            Add Another
          </button>
          <button id="confirmHistory" className="globalBtn">
            Confirm
          </button>
          </div>
        </form>
      
    </>
  );
}
export default WorkHistory;
