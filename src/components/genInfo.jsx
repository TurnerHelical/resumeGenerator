import "../styles/genInfo.css";
import React from "react";
import {useState} from "react";


function GenInfo(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');


  const handleSubmit = () => {
    if (name === '' || email === '' || address === '') {
      return alert('Please enter the missing information')
    } else {
    const info = {
      name, email, address
    };
    props.onDataReceived(info,'gen');
  }}
  return (
    <>
      
        
        <form id="genForm" onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
          <div className="formFields">
            <label htmlFor="Name" className="genLabel">Full Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John Smith"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
          </div>
         
          <div className="formFields">
            <label htmlFor="email" className="genLabel">Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Someone@something.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
          </div>
          <div className="formFields">
            <label htmlFor="address" className="genLabel">Home Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="123 Sunny Lane"
              value={address}
              onChange={(e) => setAddress(e.target.value)}>
                
              </input>

          </div>

          <button id="confirmInfo" className="globalBtn" onClick={(e) => {e.preventDefault(); handleSubmit()}}>Confirm</button>
        </form>
      
    </>
  );
}

export default GenInfo;
