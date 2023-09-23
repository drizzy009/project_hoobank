import React, { useState } from "react";
import jsonp from "jsonp";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      "https://github.us10.list-manage.com/subscribe/post?u=5bd792afcd72202ed60397377&id=bb3b323d69&f_id=0032c7e5f0";

    jsonp(
      `${url}&EMAIL=${encodeURIComponent(email)}&FNAME=${encodeURIComponent(
        firstname
      )}`,
      { param: "c", timeout: 5000 }, // Set a longer timeout (e.g., 5000 milliseconds)
      (err, data) => {
        if (err) {
          console.error("Error subscribing:", err);
          alert("An error occurred while subscribing.");
        } else {
          const { msg } = data;
          // Check if the response contains a success message
          if (
            msg === "Almost finished... We need to confirm your email address."
          ) {
            alert(msg);
            setEmail("");
            setFirstName("");
          } else {
            alert(msg);
          }
        }
      }
    );

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  return (
    <>
      <h2>Subscribe to our newsletter!</h2>
      {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your first name here"
          value={firstname}
          onChange={handleFirstNameChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px",
          }}
          name="FNAME"
          id="mce-FNAME"
          required
        />
        <input
          type="email"
          placeholder="Enter your email address here"
          value={email}
          onChange={handleEmailChange}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px",
          }}
          name="EMAIL"
          id="mce-EMAIL"
          required
        />

        <button
          type="submit"
          style={{
            margin: "10px",
            padding: "10px",
            backgroundColor: "#4CAF50",
            border: "none",
            color: "white",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Subscribe
        </button>
      </form>
    </>
  );
}

export default Newsletter;
