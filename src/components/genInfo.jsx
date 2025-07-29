
function GenInfo() {
    return <>

            <section>
                <h2>Enter General Info Here!</h2>
                <form>
                    <label for='firstName'>First Name:</label>
                    <input type="text" name="firstName" id="firstName" placeholder="John"></input>

                    <label for='lastName'>Last Name:</label>
                    <input type="text" name="lastName" id="lastName" placeholder="Smith"></input>

                    <label for='email'>Email Address:</label>
                    <input type="email" name="emailAddress" id="emailAddress" placeholder="Someone@something.com"></input>
                </form>
            </section>

        </>
}

export default GenInfo