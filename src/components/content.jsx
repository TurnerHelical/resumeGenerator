import "../styles/content.css";
import GenInfo from "./genInfo";
import Edu from "./edu";
import WorkHistory from "./workHistory";
import { useState } from "react";

function Content() {
  window.onload = () => {
    const sectionTitles = document.querySelector(".title");
    sectionTitles.classList.add("fade-in");
  };

  const [activeSection, setActiveSection] = useState(null);
  const titleClick = (event) => {
    let titleId = event.currentTarget.id;
    const contentTitle = document.querySelector('#pageTitle'); 
    if (titleId === "genTitle") {
      contentTitle.innerHTML = 'General Info';
      setActiveSection("gen");
    } else if (titleId === "eduTitle") {
      contentTitle.innerHTML = 'Education';
      setActiveSection("edu");
    } else {
      contentTitle.innerHTML = 'Work History';
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
            {activeSection === "gen" && <GenInfo />}
            {activeSection === "edu" && <Edu />}
            {activeSection === "work" && <WorkHistory />}
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

        <div id="resumePaper"></div>
      </main>
    </>
  );
}

export default Content;
