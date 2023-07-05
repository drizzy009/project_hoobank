import React, { useState, useEffect } from "react";
import style from "../pages/Contact.module.css";
import styles from "../style";

const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary form submission actions here
    // For example, send form data to the server using an API

    // Reset the form after submission
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCompany("");
  };

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();

      // Access the form values
      const emailValue = email;
      const firstnameValue = firstName;
      const lastnameValue = lastName;
      const mobileValue = phone;
      const companyValue = company;
      const positionValue = position;

      console.log(emailValue);
      console.log(positionValue);

      // Identify user in smartech
      smartech("identify", emailValue);

      // Dispatch digital ads
      smartech("dispatch", "digitalads", { Email: emailValue });

      // Contact smartech
      smartech("contact", "118", {
        "pk^email": emailValue,
        PHONE: mobileValue,
        FIRSTNAME: firstnameValue,
        LASTNAME: lastnameValue,
        COMPANY: companyValue,
        POSITION: positionValue,
      });
    };

    // Attach event listener to the button
    const mkadsButton = document.getElementById("mkads");
    mkadsButton.addEventListener("click", handleClick);

    // Clean up the event listener when the component unmounts
    return () => {
      mkadsButton.removeEventListener("click", handleClick);
    };
  }, [email, firstName, lastName, phone, company, position]);

  return (
    <section className={`${styles.flexCenter} my-4`} id="contact-us">
      <div className={`${styles.flexCenter} flex-wrap w-full ${style.main}`}>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className={style.formContainer}>
            <input
              type="text"
              className="formControl"
              id="fname"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="first-name">First name</label>
          </div>
          <div className={style.formContainer}>
            <input
              type="text"
              className="formControl"
              id="lname"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="last-name">Last name</label>
          </div>

          <div className={style.formContainer}>
            <input
              type="email"
              className="formControl"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className={style.formContainer}>
            <input
              type="tel"
              className="formControl"
              id="phone"
              name="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="phone">Country code and phone number</label>
          </div>

          <div className={style.formContainer}>
            <input
              type="text"
              className="formControl"
              id="position"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
            />
            <label htmlFor="company">Position</label>
          </div>
          <div className={style.formContainer}>
            <input
              type="text"
              className="formControl"
              id="company"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <label htmlFor="company">Company name</label>
          </div>

          {/* Button for smartech */}
          <div className={style.submit_form}>
            <button className={style.button2} type="submit" id="mkads">
              Register now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
