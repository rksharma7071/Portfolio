import { useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoCheckmarkCircle, IoAlertCircleOutline, IoSend } from "react-icons/io5";

const service_id = import.meta.env.VITE_SERVICE_ID;
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: "",
    type: "", // 'success' | 'error'
  });

  const formChanges = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactForm = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setStatus({
        submitting: false,
        message: "Please fill out all required fields.",
        type: "error"
      });
      return;
    }

    setStatus({ submitting: true, message: "", type: "" });

    // Ensure parameters match standard template variables
    const templateParams = {
      name: contactForm.name,
      from_name: contactForm.name,
      email: contactForm.email,
      from_email: contactForm.email,
      reply_to: contactForm.email,
      subject: contactForm.subject || "Portfolio Contact Inquiry",
      message: contactForm.message,
    };

    emailjs
      .send(service_id, template_id, templateParams, public_key)
      .then(
        () => {
          setStatus({
            submitting: false,
            message: "Thank you. Your message has been sent successfully.",
            type: "success"
          });
          setContactForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("EmailJS submission error:", error);
          const errorMessage =
            error?.text ||
            error?.message ||
            (typeof error === "string" ? error : "");

          setStatus({
            submitting: false,
            message: errorMessage
              ? `Unable to send message: ${errorMessage}`
              : "Unable to send message right now. Please reach out via email directly.",
            type: "error"
          });
        }
      );
  };

  return (
    <section className="section section-surface" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="headline-lg">Let’s connect.</h2>
          <p className="body-md contact-subtitle">
            Whether you are looking to hire a Software Engineer, discuss an architecture challenge, or collaborate on a project.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Info */}
          <div className="contact-info-panel reveal delay-1">
            <div className="card contact-status-card">
              <div className="status-indicator-wrap">
                <span className="status-dot"></span>
                <span className="status-title">Open to Opportunities</span>
              </div>
              <p className="body-sm status-text">
                Available for full-time Software Engineer, Frontend (React), and Full-Stack MERN developer roles.
              </p>
            </div>

            <div className="direct-channels-list">
              <h3 className="channels-heading">Direct Channels</h3>

              <a
                href="mailto:rksharma7071@gmail.com"
                className="channel-item"
              >
                <div className="channel-icon-box">
                  <SiGmail size={18} color="#ea4335" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">Email</span>
                  <span className="channel-value">rksharma7071@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/reteshkumarsharma/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-box">
                  <FaLinkedin size={18} color="#0077b5" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">LinkedIn</span>
                  <span className="channel-value">linkedin.com/in/reteshkumarsharma</span>
                </div>
              </a>

              <a
                href="https://github.com/rksharma7071"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-box">
                  <FaGithub size={18} color="#1d1d1f" />
                </div>
                <div className="channel-details">
                  <span className="channel-label">GitHub</span>
                  <span className="channel-value">github.com/rksharma7071</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel reveal delay-2">
            <form className="card apple-form-card" onSubmit={handleContactForm}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Alex Morgan"
                  name="name"
                  className="input"
                  onChange={formChanges}
                  value={contactForm.name}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. alex@example.com"
                  name="email"
                  className="input"
                  onChange={formChanges}
                  value={contactForm.email}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project inquiry / Opportunity"
                  name="subject"
                  className="input"
                  onChange={formChanges}
                  value={contactForm.subject}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your team, project, or question..."
                  name="message"
                  className="input message-textarea"
                  onChange={formChanges}
                  value={contactForm.message}
                  required
                ></textarea>
              </div>

              <div className="form-submit-row">
                <button
                  type="submit"
                  className="btn-primary form-submit-btn"
                  disabled={status.submitting}
                >
                  <span>{status.submitting ? "Sending..." : "Send Message"}</span>
                  <IoSend size={14} />
                </button>
              </div>

              {status.message && (
                <div className={`apple-alert ${status.type}`}>
                  {status.type === "success" ? (
                    <IoCheckmarkCircle size={18} color="#0071e3" />
                  ) : (
                    <IoAlertCircleOutline size={18} color="#d70015" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
