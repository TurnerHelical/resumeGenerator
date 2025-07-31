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
            <h2 id="initialTitle" className="disabled">Click on a tab to begin!</h2>
          <section>
            <h2 id="genTitle" className="sectionTitle">General Info</h2>
            <div id="genInfo" className="hidden">
                <GenInfo />
            </div>
          </section>

          <section>
          <h2 id="eduTitle" className="sectionTitle">Education</h2>
            <div id="edu" className="hidden">
                <Edu />
            </div>
          </section>

          <section>
          <h2 id="workHistoryTitle" className="sectionTitle">Work History</h2>
            <div id="workHistory" className="hidden">
                <WorkHistory />
            </div>
          </section>
        </div>

        <div id="resumePaper">

        </div>
      </main>
    </>
  );
}

export default Content;
