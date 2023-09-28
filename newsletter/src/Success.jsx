// Import the CSS file for styling this component
import "./Success.css";
// Define and export the Success functional component
export default function Success() {
  return (
    <>
      {/* Container for the success message card */}
      <div className="container  card-container">
        {/* Card for displaying the success message */}
        <div className="card my-card card-radius">
          {/* Card content */}

          <div className="card-body p-5 ">
            {/* Success icon */}
            <img
              src="/assets/images/icon-success.svg"
              alt=""
              className="success-icon"
            />
            {/* Success message */}

            <h2 className="card-title fw-bolder mt-4  thanku-msg fs-1 ">
              Thanks for Subscribing!
            </h2>
            {/* Email confirmation message */}
            <p className="card-text mt-3 email-msg">
              A confirmation email has been sent to{" "}
              <strong>ash@loremcompanycom.</strong>Please open it and click the
              button inside to confirm your subscription
            </p>
            {/* Dismiss button */}
            <button
              type="button"
              className=" dismiss-btn  btn btn-primary mt-3 w-100 p-3"
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
