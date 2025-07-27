import React from 'react';
import './Resume.css';

const Resume = () => {
  const education = [
    {
      title: 'Priyadharshini E.M school',
      period: '2008 — 2013',
      description: 'I have my academic excellence in the Priyadharshini E.M school, where I partially completed my primary schooling and had to move out for some particular reasons.'
    },
    {
      title: 'De Paul Global School',
      period: '2014 — 2020',
      description: 'I have my academic excellence in the De Paul Global School, where I completed my secondary and higher secondary schooling and completed my class 10.'
    },
    {
      title: 'Sri Viswa intermediate college',
      period: '2021 — 2023',
      description: 'I have my academic excellence in the Sri Viswa intermediate college, where I graduated my intermediate education and got the source to the open world where I found the opportunities to explore my interests.'
    }
  ];

  const experience = [
    {
      title: 'Batch coordinator',
      period: '2021 — 2023',
      description: 'I have been appointed as the batch coordinator in the college, where I have been given the responsibility to coordinate the activities of the batch and to maintain the discipline in the batch and also to maintain the pace of my team'
    },
    {
      title: 'Project Manager',
      period: '2023 — 2025',
      description: 'I have been appointed as the project manager in my engineering college, where I have been given the responsibility to coordinate the activities of my team and to maintain the discipline in the team and also to maintain the pace of my team and to continue the projects.'
    }
  ];

  const skills = [
    { name: 'Leadership', percentage: 75 },
    { name: 'Co-ordination', percentage: 85 },
    { name: 'Understanding-skills', percentage: 90 },
    { name: 'Presentation-skills', percentage: 50 }
  ];

  return (
    <article className="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>
              <div className="skill-progress-bg">
                <div 
                  className="skill-progress-fill" 
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;