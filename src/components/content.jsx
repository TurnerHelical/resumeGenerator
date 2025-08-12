import "../styles/content.css";
import GenInfo from "./genInfo";
import Edu from "./edu";
import WorkHistory from "./workHistory";

function Content() {
  window.onload = () => {
    const sectionTitles = document.querySelector(".title");
    sectionTitles.classList.add("fade-in");
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
          <GenInfo/>
        </div>
        <div id="formTitles">
          <h2 id="genTitle" className="sectionTitle">
            General Info
          </h2>
          <h2 id="eduTitle" className="sectionTitle">
            Education
          </h2>
          <h2 id="workHistoryTitle" className="sectionTitle">
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
