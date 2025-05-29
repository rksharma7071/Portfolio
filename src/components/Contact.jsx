import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [message, setMessage] = useState("");

  const formChanges = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    console.log("Contact Form", contactForm);
    emailjs
      .send(
        "service_sh5a21d",
        "template_q3q7o1k",
        contactForm,
        "N_lzlWeVEQefa8NLz"
      )
      .then(
        (result) => {
          // console.log("SUCCESS!", result.text);
          setMessage("Message sent successfully!");
          setContactForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          // console.log("FAILED...", error.text);
          setMessage("Failed to send message. Try again.");
          // alert("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="container contact-container" id="contact">
      <div className="contact-container-inner">
        <div className="contact-contact">
          <h1>Contact Me</h1>
          <h2>Let’s Work Together!</h2>
          <p>
            Have a project in mind or just want to say hello? Feel free to drop
            me a message using the form below — I’ll get back to you as soon as
            possible!
          </p>
        </div>
        <div className="contact-form">
          <form method="post" onSubmit={handleContactForm}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={formChanges}
              value={contactForm.name}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={formChanges}
              value={contactForm.email}
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              onChange={formChanges}
              value={contactForm.subject}
            />
            <textarea
              placeholder="Message"
              name="message"
              onChange={formChanges}
              value={contactForm.message}
            ></textarea>
            <button className="btn btn-primary">Submit</button>
          </form>
          {message && 
          <p className="alert success">{message}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Contact;
