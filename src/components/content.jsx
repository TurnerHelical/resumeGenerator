import "../styles/content.css";
import GenInfo from "./genInfo";
import Edu from "./edu";
import WorkHistory from "./workHistory";

function Content() {
  return (
    <>
      <main>
        <div id="sectionCtr">
          <section id="genInfo">
            <GenInfo />
          </section>

          <section id="edu">
            <Edu />
          </section>

          <section id="workHistory">
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
