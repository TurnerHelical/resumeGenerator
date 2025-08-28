import "../styles/content.css";
import GenInfo from "./genInfo";
import Edu from "./edu";
import WorkHistory from "./workHistory";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Content() {
  const [genData, setGenData] = useState();
  const [eduData, setEdu] = useState([]);
  const [whData, setWhData] = useState([]);

  const handleData = (data, form) => {
    if (form === "gen") {
      setGenData(data);
    } else if (form === "edu") {
      setEdu(data);
    } else {
      setWhData(data);
    }
  };

  const [activeSection, setActiveSection] = useState(null);
  const titleClick = (event) => {
    let titleId = event.currentTarget.id;
    if (titleId === "genTitle") {
      setActiveSection("gen");
    } else if (titleId === "eduTitle") {
      setActiveSection("edu");
    } else {
      setActiveSection("work");
    }
  };
  return (
    <>
      <main>
        <div id="contentCtr">
          <div id="formCtr">
            <AnimatePresence mode="wait">
              {activeSection === null && (
                <motion.div
                  key={null}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="activeTitle">Click on a tab to begin!</h2>
                </motion.div>
              )}
              {activeSection === "gen" && (
                <motion.div
                  key={"gen"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="activeTitle">General Information</h2>
                  <GenInfo onDataReceived={handleData} />
                </motion.div>
              )}

              {activeSection === "edu" && (
                <motion.div
                  key={"edu"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="activeTitle">Education</h2>
                  <Edu onDataReceived={handleData} />
                </motion.div>
              )}

              {activeSection === "work" && (
                <motion.div
                  key={"work"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 id="activeTitle">Work History</h2>
                  <WorkHistory onDataReceived={handleData} />
                </motion.div>
              )}
            </AnimatePresence>
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
            <h2 id="placedName">{genData?.name || ""}</h2>
            <div id="addressCtr">
              <p id="placedEmail">{genData?.email || ""}</p>
              <p id="placedAddress">{genData?.address || ""}</p>
            </div>
          </div>
          <div id="resumeEdu">
            <h3>Education</h3>
            {eduData.map((edu, i) => (
              <div key={i}>
                <h4>{edu.school}</h4>
                <p>{edu.degree}</p>
                <p>{edu.program}</p>
                <p>{edu.dateGrad}</p>
              </div>
            ))}
          </div>
          <div id="resumeWH">
            <h3>Work History</h3>
            <ul id="whSection">
              {whData.map((job, i) => (
                <li key={i}>
                  <h4>
                    {job.company} — <em>{job.title}</em>
                  </h4>
                  <p>
                    {job.start} – {job.end}
                  </p>

                  {Array.isArray(job.tasks) && job.tasks.length > 0 && (
                    <ul>
                      {job.tasks.map((t, idx) => (
                        <li key={idx}>{t}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;
