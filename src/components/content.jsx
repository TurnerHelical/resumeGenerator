import "../styles/content.css";
import GenInfo from "./genInfo";
import Edu from "./edu";
import WorkHistory from "./workHistory";

function Content() {
    window.onload = () => {
        const sectionTitles = document.querySelector('.title');
        sectionTitles.classList.add('fade-in');
    }
  return (
    <>
      <main>
        <div id="sectionCtr">
          <section id="genInfo">
            <h2 id="genTitle" className="sectionTitle">General Info</h2>
            <GenInfo />
          </section>

          <section id="edu">
          <h2 id="eduTitle" className="sectionTitle">Education</h2>
            <Edu />
          </section>

          <section id="workHistory">
          <h2 id="workHistoryTitle" className="sectionTitle">Work History</h2>
            <WorkHistory />
          </section>
        </div>

        <div id="resumePaper">

        </div>
      </main>
    </>
  );
}

export default Content;
