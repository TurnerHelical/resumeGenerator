import "../styles/genInfo.css";

function GenInfo() {
  return (
    <>
      <div id="genCtr">
        <h2>General Info</h2>
        <form>
          <div className="formFields">
            <label for="firstName" className="genLabel">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
            ></input>
          </div>
          <div className="formFields">
            <label for="lastName" className="genLabel">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Smith"
            ></input>
          </div>
          <div className="formFields">
            <label for="email" className="genLabel">Email Address:</label>
            <input
              type="email"
              name="emailAddress"
              id="emailAddress"
              placeholder="Someone@something.com"
            ></input>
          </div>
          <button id="confirmInfo">Confirm</button>
        </form>
      </div>
    </>
  );
}

export default GenInfo;
