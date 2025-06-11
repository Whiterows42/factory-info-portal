import React, { useEffect, memo } from 'react';

import { fallbackReports, categories } from './Data';
const Reports = memo(() => {
 
 

 
  // Use API data or fallback to static data
  // const reportsData = reports.length > 0 ? reports : fallbackReports;
  const reportsData = fallbackReports;



  return (
    <div className="reports-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg, #ed2a30 0%, #c41e3a 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">रिपोर्ट</h1>
              <p className="lead">
                आमचे वार्षिक, आर्थिक आणि इतर महत्वाचे अहवाल
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Categories */}
      <section className="categories-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">अहवाल प्रकार</h2>
              <p className="text-muted">
                विविध प्रकारचे अहवाल उपलब्ध आहेत
              </p>
            </div>
          </div>

          <div className="row g-4">
            {categories.map((category, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="category-card text-center p-4 bg-white rounded shadow-sm border h-100">
                  <div className="category-icon mb-3">
                    <i className={`fas ${category.icon} fa-3x text-${category.color}`}></i>
                  </div>
                  <h5 className="mb-2">{category.name}</h5>
                  <p className="text-muted mb-3">{category.count} अहवाल उपलब्ध</p>
                  <button className={`btn btn-${category.color} btn-sm`}>
                    पहा
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reports */}
      <section className="reports-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">अलीकडील अहवाल</h2>
              <p className="text-muted">
                नवीनतम अहवाल डाउनलोड करा
              </p>
            </div>
          </div>

          <div className="row g-4">
            {reportsData.map((report) => (
              <div key={report.id} className="col-lg-4 col-md-6">
                <div className="report-card h-100 bg-white rounded shadow-sm border">
                  <div className="card-body p-4">
                    <div className="report-header d-flex align-items-start mb-3">
                      <div className="report-icon me-3">
                        <i className={`fas ${report.icon} fa-2x`}></i>
                      </div>
                      <div className="report-info flex-grow-1">
                        <span className="badge bg-light text-dark mb-2">{report.category}</span>
                        <h6 className="report-title mb-2">{report.title}</h6>
                      </div>
                    </div>

                    <div className="report-meta">
                      <div className="meta-item d-flex justify-content-between mb-2">
                        <span className="text-muted">दिनांक:</span>
                        <span className="fw-bold">{report.date}</span>
                      </div>
                      <div className="meta-item d-flex justify-content-between mb-2">
                        <span className="text-muted">आकार:</span>
                        <span className="fw-bold">{report.fileSize}</span>
                      </div>
                    </div>

                    <div className="report-actions">
                      <button className="btn btn-primary btn-sm me-2">
                        <i className="fas fa-download me-1"></i>
                        डाउनलोड
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="fas fa-eye me-1"></i>
                        पूर्वावलोकन
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section py-5 bg-light">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-file-alt fa-3x text-primary mb-3"></i>
                <h3 className="fw-bold">५०+</h3>
                <p className="text-muted">एकूण अहवाल</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-calendar fa-3x text-success mb-3"></i>
                <h3 className="fw-bold">३९+</h3>
                <p className="text-muted">वर्षांचे अहवाल</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-download fa-3x text-warning mb-3"></i>
                <h3 className="fw-bold">१०,०००+</h3>
                <p className="text-muted">डाउनलोड्स</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-chart-line fa-3x text-info mb-3"></i>
                <h3 className="fw-bold">१००%</h3>
                <p className="text-muted">पारदर्शकता</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Access */}
      <section className="access-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4">अहवाल कसे मिळवावेत</h2>
              <div className="access-steps">
                <div className="step-item d-flex mb-3">
                  <div className="step-number bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" 
                       style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                    १
                  </div>
                  <div>
                    <h6 className="mb-1">अहवाल निवडा</h6>
                    <p className="text-muted mb-0">आपल्याला आवश्यक असलेला अहवाल निवडा</p>
                  </div>
                </div>

                <div className="step-item d-flex mb-3">
                  <div className="step-number bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" 
                       style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                    २
                  </div>
                  <div>
                    <h6 className="mb-1">डाउनलोड करा</h6>
                    <p className="text-muted mb-0">डाउनलोड बटणावर क्लिक करा</p>
                  </div>
                </div>

                <div className="step-item d-flex">
                  <div className="step-number bg-primary text-white rounded-circle me-3 d-flex align-items-center justify-content-center" 
                       style={{ width: '40px', height: '40px', fontSize: '14px' }}>
                    ३
                  </div>
                  <div>
                    <h6 className="mb-1">वाचा आणि शेअर करा</h6>
                    <p className="text-muted mb-0">अहवाल वाचा आणि आवश्यक असल्यास शेअर करा</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="text-center">
                <img 
                  src="https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg"
                  alt="अहवाल"
                  className="img-fluid rounded shadow"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Reports; 