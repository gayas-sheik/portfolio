import React from 'react';
import './TestimonialModal.css';

const TestimonialModal = ({ isOpen, onClose, testimonial }) => {
  if (!isOpen || !testimonial) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal-container ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={onClose}></div>
      
      <section className="testimonials-modal">
        <button className="modal-close-btn" onClick={onClose}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={testimonial.avatar} alt={testimonial.name} width="80" />
          </figure>
          <img src="./images/icon-quote.svg" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title">{testimonial.name}</h4>
          <time dateTime={testimonial.date}>
            {new Date(testimonial.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          <div className="modal-text">
            <p>{testimonial.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialModal;