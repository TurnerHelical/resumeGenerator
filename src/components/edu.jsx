function Edu() {

  return (
    <>
      <section>
        <h2>Education</h2>
        <form>
          <div className="school">
            <label for="schoolName">Name of the issuing entity: </label>
            <input type="text" name="schoolName" id="schoolName" placeholder="University of Somewhere"></input>

            <label for="degree">
              Enter the Degree or Certificate you received:{" "}
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              placeholder="Bachelors of Science in something relevant"
            ></input>

            <label for="completed">When did you graduate: </label>
            <input type="date" name="completed" id="completed" placeholder="01/01/01"></input>
          </div>
         <button id="anotherEdu" className="btn">Add Another</button>
         <button id="confirmEdu" className="btn">Confirm</button>
        </form>
      </section>
    </>
  );
}
export default Edu;
