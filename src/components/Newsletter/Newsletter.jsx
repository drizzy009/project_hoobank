import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);

      try {
        // Construct the Mailchimp subscribe URL with query parameters
        const mailchimpSubscribeUrl = `https://github.us10.list-manage.com/subscribe/post?u=5bd792afcd72202ed60397377&id=bb3b323d69&EMAIL=${encodeURIComponent(email)}&FNAME=${encodeURIComponent(firstName)}`;

        // Send a POST request to the Mailchimp subscribe URL with 'no-cors' mode
        await fetch(mailchimpSubscribeUrl, {
          method: 'POST',
          mode: 'no-cors', // Use 'no-cors' mode
        });

        // Display a success message (no response data available due to 'no-cors' mode)
        alert(`Thank you for subscribing with ${email}`);
        setEmail('');
        setFirstName('');
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while subscribing.');
      }
    }
  }

  return (
    <div className="App">
      <h2>Subscribe to our newsletter!</h2>
      {!isEmailValid ? <p>Please enter a valid email address</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email address here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;
