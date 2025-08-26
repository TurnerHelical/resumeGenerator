import React from "react";
import {useState} from "react";
import "../styles/workHistory.css";



  function WorkHistory(props) {
    const [taskInput, setTaskInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [company, setCompany]= useState('');
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [workHistory, setWorkHistory] = useState([]);
  
    const addTask = () => {
      const val = taskInput.trim();
      if (!val) return;
      setTasks((prev) => [...prev, val]);
      setTaskInput("");
    };



    const handleSubmit = (comp, jobTitle, tasktest, start, end) => {
      const job =  {
      company: comp,
      title: jobTitle,
      test: [...tasktest],
      start: start,
      end: end,
      };
      const next = [...workHistory, job]
      setWorkHistory(next);
      props.onDataReceived(next);
      clearForm();
      
    };

    

    const clearForm = () => {
      setCompany("");
      setTitle("");
      setStartDate("");
      setEndDate("");
      setTaskInput("");
      setTasks([]);
    };
  
  return (
    <>
      
        
        <form id="whForm" onSubmit={(e) => {e.preventDefault(); handleSubmit() }} >
            <div className="jobInfo">
              <label htmlFor="company" className="whLabel">Company Name:</label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Stuff Inc"
                value={company}
                onChange= {(e) => setCompany(e.target.value)}
              ></input>
            </div>
            <div className="jobInfo">
              <label htmlFor="jobTitle" className="whLabel">Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Jester"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="jobInfo" >
              <label htmlFor="tasks" className="whLabel">Responsibilities:</label>
              <input
                type="text"
                name="tasks"
                id="tasks"
                placeholder="Jester"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onKeyDown={(e) => {if (e.key === 'Enter') {e.preventDefault(); addTask(); }}}
              ></input>
              <button id="taskButton" type="button" onClick={addTask}>+</button>
            </div>
            <div id="taskListCtr">
            <ul id="listOfTasks">
            {tasks.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
            </div>
            
            <div id="dateRangeCtr">
              <p>When did you work there:</p>
              <div id="dateRange">
                <label htmlFor="startDate">Start Date:</label>
                <input type="month" name="startDate" id="startDate" onChange={(e) => {setStartDate(e.target.value)}} value={startDate}></input>
              
              
                <label htmlFor="endDate">End Date:</label>
                <input type="month" name="endDate" id="endDate" onChange={(e) => {setEndDate(e.target.value)}} value={endDate}></input>
              </div>
              </div>
          <div id="jobBtnCtr">
          <button id="add" className="globalBtn" type="button" onClick={(e) => {e.preventDefault(); handleSubmit(company, title, tasks, startDate, endDate); }}>
            Add
          </button>
          </div>
        </form>
      
    </>
  );
  }
export default WorkHistory;
