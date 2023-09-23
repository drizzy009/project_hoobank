// Newsletter.jsx
import { useState } from "react";
// import mailchimp from "../../services/mailchimp"; // Adjust the path as needed

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  function handleInput(event) {
    setEmail(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);

      try {
        // Call your Mailchimp API function here
        const response = await mailchimp.subscribe(email);

        // Handle the response as needed
        if (response.success) {
          alert(`Thank you for subscribing with ${email}`);
          setEmail("");
        } else {
          alert(`Subscription failed: ${response.error}`);
        }
      } catch (error) {
        console.error("Error subscribing:", error);
        alert("An error occurred while subscribing.");
      }
    }
  }

  return (
    <>
      <h2>Subscribe to our newsletter!</h2>
      {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address here"
          value={email}
          onChange={handleInput}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "5px",
          }}
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
