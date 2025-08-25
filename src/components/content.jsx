import "../styles/content.css";
import GenInfo from "./genInfo";
import Edu from "./edu";
import WorkHistory from "./workHistory";
import { useState } from "react";

function Content() {
  // const [genData, setGenData] = useState('');
  // const [eduData, setEdu] = useState([]);
  const [whData, setWhData] = useState([]);

  const handleData = (data) => {
    setWhData(data);
  };
  
  window.onload = () => {
    const sectionTitles = document.querySelector(".title");
    sectionTitles.classList.add("fade-in");
  };

  const [activeSection, setActiveSection] = useState(null);
  const titleClick = (event) => {
    let titleId = event.currentTarget.id;
    const contentTitle = document.querySelector("#pageTitle");
    if (titleId === "genTitle") {
      contentTitle.innerHTML = "General Info";
      setActiveSection("gen");
    } else if (titleId === "eduTitle") {
      contentTitle.innerHTML = "Education";
      setActiveSection("edu");
    } else {
      contentTitle.innerHTML = "Work History";
      setActiveSection("work");
    }
  };
  return (
    <>
      <main>
        <div id="contentCtr">
          <div id="TitleCtr">
            <h2 id="pageTitle" className="">
              Click on a tab to begin!
            </h2>
          </div>
          <div id="formCtr">
            {activeSection === "gen" && <GenInfo onDataReceived={handleData} />}
            {activeSection === "edu" && <Edu onDataReceived={handleData}/>}
            {activeSection === "work" && <WorkHistory onDataReceived={handleData}/>}
          </div>
          <div id="formTitles">
            <h2 id="genTitle" className="sectionTitle" onClick={titleClick}>
              General Info
            </h2>
            <h2 id="eduTitle" className="sectionTitle" onClick={titleClick}>
              Education
            </h2>
            <h2
              id="workHistoryTitle"
              className="sectionTitle"
              onClick={titleClick}
            >
              Work History
            </h2>
          </div>
        </div>

        <div id="resumePaper">
          <div id="resumeGenInfo">
            <h2 id="placedName">Hunter LeClair</h2>
            <div id="addressCtr">
              <p id="placedEmail">Hunterde91@gmail.com</p>
              <p id="placedAddress">123 Sunny Lane Sarasota, FL 34231</p>
            </div>
          </div>
          <div id="resumeEdu">
            <h3>Education</h3>
            <div className="eduEntry">
              <h5>University of Central Florida</h5>
              <p>Bachelor's of Science</p>
              <p>Computer Science</p>
              <p>2010-2014</p>
              <p>Orlando,FL</p>
            </div>
            <div className="eduEntry">
              <h5>University of Central Florida</h5>
              <p>Bachelor's of Science</p>
              <p>Computer Science</p>
              <p>2010-2014</p>
              <p>Orlando,FL</p>
            </div>
            <div className="eduEntry">
              <h5>University of Central Florida</h5>
              <p>Bachelor's of Science</p>
              <p>Computer Science</p>
              <p>2010-2014</p>
              <p>Orlando,FL</p>
            </div>
          </div>
          <div id="resumeWH">
            <h3>Work History</h3>
            <ul id="whSection">
              {whData.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
              
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;
