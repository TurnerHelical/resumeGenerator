import "../styles/genInfo.css";
import React from "react";

function GenInfo() {
  
  return (
    <>
      
        
        <form id="genForm">
          <div className="formFields">
            <label htmlFor="Name" className="genLabel">Full Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John Smith"
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
          <div className="formFields">
            <label htmlFor="address">Home Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="123 Sunny Lane">
              </input>

          </div>
          <button id="confirmInfo" className="globalBtn">Confirm</button>
        </form>
      
    </>
  );
}

export default GenInfo;
