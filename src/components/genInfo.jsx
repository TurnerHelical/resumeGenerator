import "../styles/genInfo.css";
import React from "react";

function GenInfo() {
  return (
    <>
      <div id="genCtr">
        <h2>General Info</h2>
        <form>
          <div className="formFields">
            <label htmlFor="firstName" className="genLabel">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
            ></input>
          </div>
          <div className="formFields">
            <label htmlFor="lastName" className="genLabel">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Smith"
            ></input>
          </div>
          <div className="formFields">
            <label htmlFor="email" className="genLabel">Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Someone@something.com"
            ></input>
          </div>
          <button id="confirmInfo" className="globalBtn">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default GenInfo;
