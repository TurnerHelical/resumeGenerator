function WorkHistory() {
  return (
    <>
      <section>
        <h2>Work History</h2>
        <form>
          <div>
            <label for="company">Company Name:</label>
            <input type="text" name="company" id="company" placeholder="Stuff Inc"></input>

            <label for="jobTitle">Job Title:</label>
            <input type="text" name="jobTitle" id="jobTitle" placeholder="Jester"></input>
            <div>
              <p>When did you work there:</p>
              <label for="startDate">Start Date:</label>
              <input type="date" name="startDate" id="startDate"></input>

              <label for='endDate'>End Date:</label>
              <input type="date" name="endDate" id="endDate"></input>
            </div>
          </div>
          <button id="anotherJob">Add Another</button>
          <button id="confirmHistory">Confirm</button>
        </form>
      </section>
    </>
  );
}
export default WorkHistory;
