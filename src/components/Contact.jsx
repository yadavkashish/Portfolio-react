import React from "react";
import "./Contact.css";
const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log("Form submitted");
    // Add your form handling logic here
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="head">
          <h2>Contact</h2>
          <h2>Contact</h2>
        </div>
        <div className="contact-details">
          <div className="my-details">
            <ul>
              <li>
                <h3>Contact us</h3>
                <p>+91 9559167131</p>
              </li>
              <li>
                <h3>Email Us</h3>
                <p>kashishyadav9559@gmail.com</p>
              </li>
              <li>
                <h3>Address</h3>
                <p>KIET Group of Institutions, Ghaziabad, Uttar Pradesh, India</p>
              </li>
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              className="feedback-input"
              id="1"
              placeholder="Name"
            />
            <input
              name="email"
              type="text"
              className="feedback-input"
              id="2"
              placeholder="Email"
            />
            <textarea
              name="text"
              className="feedback-input"
              id="3"
              placeholder="Comment"
            ></textarea>

            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="social">
          <a
            href="https://www.linkedin.com/in/kashishyadav20/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          <a
            href="https://github.com/yadavkashish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="https://www.instagram.com/yadav._.kashish/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <p className="copyright">&copy; Kashish Yadav | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Contact;
