import "./App.css";
import { useState } from "react"; // Import the useState hook from React
import Success from "./Success"; // Import the Success component

// Define the main App component
function App() {
  // Define state variables using the useState hook
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle changes in the email input field
  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
    console.log(email);
  };

  // Function to validate an email address using a regular expression
  function isValidEmail(email) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  }

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior avoids page refreshing
    console.log("form submitted");
    // Check if the entered email is valid
    if (!isValidEmail(email)) {
      setIsValid(false); // Set email validation state to false
      setErrorMessage("Please enter a valid email"); // Set an error message
    } else {
      setIsSuccess(true); // Set the success state to true
    }
  };
  // Render the component
  return (
    <>
      {/* Conditional rendering based on the isSuccess state */}
      {isSuccess ? (
        <Success /> // Display the Success component if isSuccess is true
      ) : (
        <div className="App container-lg ">
          {/* Main content of the form */}
          <div className="row row-cols-1 ">
            {/* Mobile and desktop images */}
            <div className=" col-12 col-lg-5 mw-100 mh-100 order-0 order-lg-1 ">
              <img
                className="mobile-img  "
                src="assets/images/illustration-sign-up-mobile.svg"
                alt="sign-up image"
              />
              <img
                className="desktop-img img-fluid  h-100"
                src="assets/images/illustration-sign-up-desktop.svg"
                alt="sign-up image"
              />
            </div>
            {/* Headings and content */}
            <div className="col-12 col-lg-7 my-2  p-5 details">
              <h1 className="display-4 header">Stay updated!</h1>
              <p>
                Join 60,0000+ product managers receiving monthly updates on:
              </p>
              {/* Content with icons */}
              <div className="row row-cols-1">
                <div className="col d-flex flex-row ">
                  <img
                    className="custom-icon-size"
                    src="assets/images/icon-success.svg"
                    alt="success-icon"
                  />
                  <p className="mx-3">
                    Product discovery and building what matters
                  </p>
                </div>
                <div className="col d-flex flex-row">
                  <img
                    className="custom-icon-size"
                    src="assets/images/icon-success.svg"
                    alt="success-icon"
                  />
                  <p className="mx-3">
                    Measuring to ensure updates are a success
                  </p>
                </div>
                <div className="col d-flex flex-row">
                  <img
                    className="custom-icon-size"
                    src="assets/images/icon-success.svg"
                    alt="success-icon"
                  />
                  <p className="mx-3">And much more!</p>
                </div>
              </div>
              {/* Form for email input */}
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                  <label
                    htmlFor="inputEmail"
                    className="form-label fw-bold mt-3 fs-6"
                  >
                    Email address
                  </label>
                  {/* Conditional rendering of error message */}
                  {isValid ? null : (
                    <span className="mt-3 text-danger">{errorMessage}</span>
                  )}
                </div>
                {/* Email input field */}
                <input
                  type="email"
                  className={`form-control p-3 ${!isValid ? "is-invalid" : ""}`}
                  id="inputEmail"
                  placeholder="email@company.com"
                  onChange={handleChange}
                  value={email}
                />
                {/* Submit button */}
                <button
                  type="submit"
                  className="subscribe fw-bold border-0 rounded p-3 mt-4 w-100"
                >
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App; // Export the App component for use in other parts of the application
