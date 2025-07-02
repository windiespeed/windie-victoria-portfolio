// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="container min-vh-100 d-flex align-items-center py-5">
      <div className="row align-items-center w-100">
        {/* Image */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="/assets/logo.svg"
            alt="Contact"
            className="img-fluid"
          />
        </div>

        {/* Form */}
        <div className="col-md-6 contact-form-wrapper">
          <h2 className="mb-4">Get in Touch</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Jane Doe" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="email@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..."></textarea>
            </div>
            <button type="submit" className="btn btn-theme">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
