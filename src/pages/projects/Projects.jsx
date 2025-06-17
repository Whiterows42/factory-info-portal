import React, { memo, useEffect } from 'react';

import { fallbackProjects, fallbackCategories, fallbackStatistics, fallbackTimeline } from './Data';
const Projects = memo(() => {
 
 
  // Use API data or fallback to static data
  const projectsData =  fallbackProjects;
  const categories = fallbackCategories;
  const statistics = fallbackStatistics; // Can be added to API later
  const timeline = fallbackTimeline; // Can be added to API later



  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg,rgb(20, 151, 226) 0%,rgb(26, 131, 218) 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">प्रकल्प</h1>
              <p className="lead">
                आमच्या कारखान्याद्वारे राबवलेले विविध प्रकल्प आणि योजना
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Categories */}
      <section className="categories-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">प्रकल्प प्रकार</h2>
              <p className="text-muted">विविध क्षेत्रातील प्रकल्प</p>
            </div>
          </div>
          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={category.name || index} className="col-lg-2 col-md-4 col-6">
                <div className="category-card text-center p-3 bg-white rounded shadow-sm h-100">
                  <h6 className="mb-2">{category.name}</h6>
                  <span className={`badge bg-${category.color}`}>{category.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">आमचे प्रकल्प</h2>
              <p className="text-muted">
                आजवर आम्ही कारखाण्याद्वारे १०+ विविध प्रकल्प आणि योजना राबवल्या आणि यशस्वी केल्या आहेत
              </p>
            </div>
          </div>

          <div className="row g-4">
            {projectsData.map((project, index) => (
              <div key={project.id || index} className="col-lg-4 col-md-6">
                <div className="project-card h-100 bg-white p-4 rounded shadow-sm border">
                  <div className="project-header d-flex align-items-center mb-3">
                    <div className="project-icon me-3">
                      <i 
                        className={`fas ${project.icon || 'fa-project-diagram'} fa-2x`}
                        style={{ color: '#ed2a30' }}
                      ></i>
                    </div>
                    <div>
                      <h5 className="mb-1">{project.title}</h5>
                      <small className="text-muted">वर्ष: {project.year}</small>
                    </div>
                  </div>
                  
                  <p className="project-description text-muted mb-3">
                    {project.description}
                  </p>
                  
                  <div className="project-meta mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">बजेट:</span>
                      <span className="fw-bold">{project.budget}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">श्रेणी:</span>
                      <span className="fw-bold">{project.category}</span>
                    </div>
                  </div>
                  
                  <div className="project-status">
                    <span className={`badge ${project.status === 'पूर्ण' ? 'bg-success' : 'bg-warning'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="timeline-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="mb-3">प्रकल्प टाइमलाइन</h2>
              <p className="text-muted">आमच्या प्रकल्पांची वर्षानुवर्षे प्रगती</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="timeline">
                {timeline.map((item, index) => (
                  <div key={item.year || index} className="timeline-item d-flex mb-4">
                    <div className="timeline-marker">
                      <div className="timeline-dot bg-primary"></div>
                    </div>
                    <div className="timeline-content ms-3">
                      <h6 className="timeline-year text-primary fw-bold">{item.year}</h6>
                      <p className="timeline-text mb-0">{item.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            {statistics.map((stat, index) => (
              <div key={stat.id || index} className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <i className={`fas ${stat.icon} fa-3x text-primary mb-3`}></i>
                  <h3 className="text-primary fw-bold">{stat.number}</h3>
                  <p className="text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

Projects.displayName = 'Projects';

export default Projects; 