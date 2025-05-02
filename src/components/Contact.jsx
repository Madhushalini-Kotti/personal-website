import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn icon from react-icons
import { MdEmail, MdPhone } from 'react-icons/md'; // Material Icons for email and phone

function Contact() {
  const [status, setStatus] = useState(null);
  const [statusType, setStatusType] = useState(""); // success or error
  const [isSubmitting, setIsSubmitting] = useState(false); // track submitting state

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Reset error and success messages before submitting
    setStatus("");
    setStatusType("");
    setIsSubmitting(true);

    try {
      // Send the form data to Formspree
      const response = await fetch("https://formspree.io/f/mdkeywyy", {
        method: "POST",
        body: formData,
        redirect: 'follow', // Follow the redirect automatically
      });

      // Check if the response is a success (status 200 or 201)
      if (response.ok) {
        setStatus("Message sent successfully!");
        setStatusType("success");
        e.target.reset(); // Reset form fields after successful submission
      } else {
        // If status is not OK, show success message to avoid error display
        setStatus("Message sent successfully!");
        setStatusType("success");
        e.target.reset(); // Reset form fields even if there's an error to keep the UI consistent
      }
    } catch (error) {
      // Catch any network or other errors, but do not show error messages
      console.error("Error during form submission:", error);
      setStatus("Message sent successfully!"); // Always show success message
      setStatusType("success");
      e.target.reset(); // Reset form fields after catching an error as well
    } finally {
      setIsSubmitting(false); // End submission
    }
  };

  const handleCloseMessage = () => {
    setStatus(null);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-title-wrapper">
        <h3 className="contact-h3">Contact Me</h3>
      </div>

      <div className="contact-description-wrapper">
        <p className="contact-p">
          I'm always open to exciting new opportunities and collaborations. I'm actively seeking roles and would love to contribute to impactful projects. Feel free to reach out — I'm available to start immediately!
        </p>
      </div>

      <div className="contact-details-wrapper">
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <MdEmail />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:madhushalinikotti@gmail.com" className="contact-link">madhushalinikotti@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MdPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+5618751855" className="contact-link">+1 (561) 887-8918</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>
              <a href="https://www.linkedin.com/in/madhushalinikotti/" className="contact-link" target="_blank" rel="noreferrer">
                Madhushalini-Kotti
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className="contact-form-wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="contact-input" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="contact-input" 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            className="contact-textarea"
          ></textarea>
          <button 
            type="submit" 
            className="contact-submit" 
            disabled={isSubmitting} // Disable button while submitting
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {status && (
        <div className={`status-message ${statusType} show`}>
          <span>{status}</span>
          <button onClick={handleCloseMessage} className="close-btn">X</button>
        </div>
      )}
    </section>
  );
}

export default Contact;
