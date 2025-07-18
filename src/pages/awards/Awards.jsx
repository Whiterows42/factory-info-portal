import React, { useEffect, memo } from 'react';
import { fallbackAwards, fallbackMilestones, fallbackStatistics } from './Data';
const Awards = memo(() => {
 
  // Use API data or fallback to static data
  const awardsData =  fallbackAwards;
  const milestones = fallbackMilestones;
  const statistics = fallbackStatistics;

  return (
    <div className="awards-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg,rgb(20, 151, 226) 0%,rgb(26, 131, 218) 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">पारितोषिके</h1>
              <p className="lead">
                स्थापना वर्ष १९७४ पासून आजवर ७० राज्य व राष्ट्रिय स्तरावरील पारितोषिके आणि पुरस्कार
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="awards-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">मुख्य पुरस्कार</h2>
              <p className="text-muted">
                आमच्या उत्कृष्ट कामगिरीसाठी मिळालेले मान्यवर पुरस्कार
              </p>
            </div>
          </div>

          <div className="row g-4">
            {awardsData.map((award, index) => (
              <div key={award.year || index} className="col-lg-4 col-md-6">
                <div className="award-card h-100 bg-white p-4 rounded shadow-sm border">
                  <div className="award-icon text-center mb-3">
                    <i 
                      className={`fas fa-trophy fa-3x`}
                      style={{ color: '#ed2a30' }}
                    ></i>
                  </div>
                  
                  <div className="award-content text-center">
                    <div className="award-year text-primary fw-bold mb-2">{award.year}</div>
                    <h5 className="award-title mb-2">{award.title}</h5>
                    <p className="award-description text-muted">{award.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="timeline-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="mb-3">महत्वाचे मैलाचे दगड</h2>
              <p className="text-muted">
                आमच्या यशाची गाथा
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year || index} className="timeline-item d-flex mb-4">
                    <div className="timeline-marker">
                      <div className="timeline-dot bg-primary"></div>
                    </div>
                    <div className="timeline-content ms-3">
                      <h6 className="timeline-year text-primary fw-bold">{milestone.year}</h6>
                      <p className="timeline-text mb-0">{milestone.achievement}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="stats-section py-5">
        <div className="container">
          <div className="row text-center g-4">
            {statistics.map((stat, index) => (
              <div key={stat.label || index} className="col-lg-3 col-md-6">
                <div className="stat-box">
                  <i className={`fas ${stat.icon} fa-3x text-warning mb-3`}></i>
                  <h3 className="fw-bold text-primary">{stat.number}</h3>
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

Awards.displayName = 'Awards';

export default Awards; 