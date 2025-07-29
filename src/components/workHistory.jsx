import React from "react";

function WorkHistory() {
  return (
    <>
      <div id="workHistoryCtr">
        <h2>Work History</h2>
        <form>
          <div>
            <label htmlFor="company">Company Name:</label>
            <input type="text" name="company" id="company" placeholder="Stuff Inc"></input>

            <label htmlFor="jobTitle">Job Title:</label>
            <input type="text" name="jobTitle" id="jobTitle" placeholder="Jester"></input>
            <div>
              <p>When did you work there:</p>
              <label htmlFor="startDate">Start Date:</label>
              <input type="date" name="startDate" id="startDate"></input>

              <label htmlFor='endDate'>End Date:</label>
              <input type="date" name="endDate" id="endDate"></input>
            </div>
          </div>
          <button id="anotherJob" className="globalBtn">Add Another</button>
          <button id="confirmHistory" className="globalBtn">Confirm</button>
        </form>
      </div>
    </>
  );
}
export default WorkHistory;
