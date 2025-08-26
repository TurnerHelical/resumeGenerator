import "../styles/content.css";
import GenInfo from "./genInfo";
import Edu from "./edu";
import WorkHistory from "./workHistory";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Content() {
  // const [genData, setGenData] = useState('');
  // const [eduData, setEdu] = useState([]);
  const [whData, setWhData] = useState([]);

  const handleData = (data) => {
    setWhData(data);
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
          <div id="TitleCtr">
            <h2 id="pageTitle">
              <AnimatePresence mode="wait">
              {activeSection === null && (
                <motion.div
                  key={null}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  >
                    Click on a tab to begin!
                  </motion.div>
              )}

              {activeSection === 'gen' && (
                <motion.div
                  key={'gen'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  >
                    General Info
                  </motion.div>
              )}
              
              {activeSection === 'edu' && (
                <motion.div
                  key={'edu'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  >
                    Education
                  </motion.div>
              )}
              
              {activeSection === 'work' && (
                <motion.div
                  key={'work'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  >
                    Work History
                  </motion.div>
            
              )}
              </AnimatePresence>
            </h2>
          </div>
          <div id="formCtr">
            <AnimatePresence mode="wait">
              {activeSection === "gen" && (
                <motion.div
                  key={"gen"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
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
