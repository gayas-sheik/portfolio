import React from 'react';
import './About.css';

const About = ({ onOpenModal }) => {
  const services = [
    {
      icon: './images/icon-design.svg',
      title: 'Web design',
      description: 'The most modern and high-quality design made at a professional level.'
    },
    {
      icon: './images/icon-dev.svg',
      title: 'Web development',
      description: 'High-quality development of sites at the professional level.'
    },
    {
      icon: './images/icon-app.svg',
      title: 'Mobile apps',
      description: 'Professional development of applications for windows and mac.'
    },
    {
      icon: './images/joystick.png',
      title: 'Gaming',
      description: 'I am very much interested in exploring the gaming world and its various aspects.'
    }
  ];

  const testimonials = [
    {
      avatar: './images/avatar-1.png',
      name: 'Dr. G J Prakash',
      text: 'A few months back, I had the honor of mentoring Gayas. Truly commendable is their unwavering dedication toward mastering full-stack development. Every project they tackle poses a problem to be solved and they do not hold back doing anything that has not been asked of them in class. The rare talent they exhibit in connecting theory to practice is priceless.',
      date: '2024-01-15'
    },
    {
      avatar: './images/people_13996323.png',
      name: 'Hemesh',
      text: 'Working with Gayas on our final year project has been nothing short of inspiring. Genuine knowledge and application of both frontend and backend technologies into the building of a solid and user-friendly platform set their talent apart. Being eager to learn from our instructors to implement real-life applications sets them apart from many.',
      date: '2024-02-20'
    },
    {
      avatar: './images/avatar-3.png',
      name: 'Dr Ramrajeshwari',
      text: 'The initiative to explore beyond the curriculum is what separates Gayas from all others. In our mentorship sessions, there was a need for active feedback seeking, prompt application of suggestions, and sometimes I got surprised by their additions to full-stack projects that had not been in the scope initially. This student is on a very solid path to becoming a top-tier software engineer.',
      date: '2024-03-10'
    },
    {
      avatar: './images/avatar-4.png',
      name: 'Siddhart roy',
      text: 'On intern with us Gayas was able to display a concrete grasp of full-stack technologies, and built scalable solutions that really impressed our entire team. They were an all-star intern for their willingness to learn and implement mentor advice. — Siddharth Rao, Tech Lead, InnovateTech Pvt. Ltd.',
      date: '2024-04-05'
    }
  ];

  const clients = [
    { logo: './images/AVVP.png', name: 'AVVP' },
    { logo: './images/depaulsvizag-logo (1).png', name: 'De Paul Global School' }
  ];

  return (
    <article className="about active">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Web Developer and UI/UX Designer from Andra pradesh, India, working in web development and designing. 
          I enjoy turning complex problems into simple, beautiful and intuitive designs in a futuristic way.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive and also responsive.
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your message and identity in the most creative way and also introduce you hi-tech and sci-fi solutions.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={`${service.title} icon`} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card" onClick={() => onOpenModal(testimonial)}>
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {clients.map((client, index) => (
            <li key={index} className="clients-item">
              <a href="#">
                <img src={client.logo} alt={`${client.name} logo`} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;