import React, { useEffect } from "react";
import "./signup.css";

const Signup = () => {
  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      console.log(email);

      smartech("identify", email);
      smartech("dispatch", "csw22", {
        Email: email,
      });
      smartech("contact", "111", {
        "pk^email": email,
      });
      document.getElementById("signup-form").submit();
    };

    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", handleSubmit);

    return () => {
      submitButton.removeEventListener("click", handleSubmit);
    };
  }, []);

  return (
    <div className="form">
      <div className="subtitle">Let's create your account!</div>
      <form id="signup-form">
        <div className="input-container ic1">
          <input id="firstname" className="input" type="text" placeholder="" />
          <div className="cut"></div>
          <label htmlFor="firstname" className="placeholder">
            First name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="lastname" className="input" type="text" placeholder="" />
          <div className="cut"></div>
          <label htmlFor="lastname" className="placeholder">
            Last name
          </label>
        </div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder="" />
          <div className="cut cut-short"></div>
          <label htmlFor="email" className="placeholder">
            Email
          </label>
        </div>
        <button type="submit" className="submit" id="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
