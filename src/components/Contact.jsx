import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    
    // Check form validity
    const isValid = updatedFormData.fullname.trim() !== '' && 
                   updatedFormData.email.trim() !== '' && 
                   updatedFormData.message.trim() !== '';
    setIsFormValid(isValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      console.log('Form submitted:', formData);
      // Handle form submission here
      alert('Message sent successfully!');
      setFormData({ fullname: '', email: '', message: '' });
      setIsFormValid(false);
    }
  };

  return (
    <article className="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.6620377086688!2d76.8967095547946!3d10.902317787114955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85c9523f6a2ed%3A0xae9b2c0e3c012e5c!2sWV3W%2B2FV%2C%20Ettimadai%20Rd%2C%20Amrita%20University%2C%20Ettimadai%2C%20Tamil%20Nadu%20641112!5e0!3m2!1sen!2sin!4v1752407202367!5m2!1sen!2sin"
            width="400" 
            height="300" 
            loading="lazy"
            title="Location Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleInputChange}
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <button 
            className="form-btn" 
            type="submit" 
            disabled={!isFormValid}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;