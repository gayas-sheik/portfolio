import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Tanvi Restaurant',
      category: 'web development',
      image: './images/Screenshot 2025-07-13 170955.png',
      link: '#'
    },
    {
      id: 2,
      title: 'Tanvi Restaurant',
      category: 'web application',
      image: './images/Screenshot 2025-07-13 170955.png',
      link: '#'
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All' },
    { id: 'web development', label: 'Web Development' },
    { id: 'web application', label: 'Web Application' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setIsSelectOpen(false);
  };

  const toggleSelect = () => {
    setIsSelectOpen(!isSelectOpen);
  };

  return (
    <article className="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {filterCategories.map((category) => (
            <li key={category.id} className="filter-item">
              <button
                className={activeFilter === category.id ? 'active' : ''}
                onClick={() => handleFilterChange(category.id)}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button 
            className={`filter-select ${isSelectOpen ? 'active' : ''}`}
            onClick={toggleSelect}
          >
            <div className="select-value">
              {filterCategories.find(cat => cat.id === activeFilter)?.label || 'Select category'}
            </div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className="select-list">
            {filterCategories.map((category) => (
              <li key={category.id} className="select-item">
                <button onClick={() => handleFilterChange(category.id)}>
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li key={project.id} className="project-item active">
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;