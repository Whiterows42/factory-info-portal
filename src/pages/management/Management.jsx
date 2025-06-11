import React, { useEffect, memo } from 'react';
import { fallbackManagementData, fallbackDepartments } from './Data';
const Management = memo(() => {


  // Use API data or fallback to static data
  const managementData =  fallbackManagementData;
  const departments = fallbackDepartments; // Can be added to API later

  // Find chairman from the data
  const chairman = managementData.find(member => 
    member.position === 'चेअरमन' || member.position.toLowerCase().includes('chairman')
  ) || managementData[0];

  
  return (
    <div className="management-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg, #ed2a30 0%, #c41e3a 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">संचालक मंडळ</h1>
              <p className="lead">
                चेअरमन {chairman.name} यांच्या मार्गदर्शनाखाली कारखान्याचे संचालक मंडळ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman Section */}
      {chairman && (
        <section className="chairman-section py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="chairman-content">
                  <h2 className="mb-4">आमचे मार्गदर्शक</h2>
                  <h3 className="text-primary mb-3">{chairman.name}</h3>
                  <h5 className="text-muted mb-3">{chairman.position}</h5>
                  <p className="lead mb-4">
                    {chairman.experience} च्या अनुभवासह कारखान्याचे यशस्वी नेतृत्व करणारे चेअरमन {chairman.name} हे 
                    शेतकरी हितचिंतक आणि समाजसेवक आहेत. त्यांच्या मार्गदर्शनाखाली कारखाना नवीन उंची गाठत आहे.
                  </p>
                  <div className="chairman-stats">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="stat-item text-center">
                          <h4 className="text-primary">{chairman.experience.split(' ')[0]}</h4>
                          <p className="text-muted">वर्षांचा अनुभव</p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="stat-item text-center">
                          <h4 className="text-primary">६०+</h4>
                          <p className="text-muted">पुरस्कार मिळवले</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="chairman-image text-center">
                  <img 
                    src={chairman.image || "https://shrivighnaharssk.com/wp-content/uploads/2021/06/8-1-1024x549.jpg"}
                    alt={`चेअरमन ${chairman.name}`}
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Management Team */}
      <section className="management-team py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">संचालक मंडळाचे सदस्य</h2>
              <p className="text-muted">
                अनुभवी आणि कुशल संचालकांचे मंडळ
              </p>
            </div>
          </div>

          <div className="row g-4">
            {managementData.map((member, index) => (
              <div key={member.id || index} className="col-lg-4 col-md-6">
                <div className="management-card h-100 bg-white rounded shadow-sm border text-center p-4">
                  <div className="member-icon mb-3">
                    <i 
                      className={`fas ${member.icon || 'fa-user'} fa-3x`}
                      style={{ color: '#ed2a30' }}
                    ></i>
                  </div>
                  
                  <h5 className="member-name mb-2">{member.name}</h5>
                  <h6 className="member-position text-primary mb-3">{member.position}</h6>
                  <p className="member-description text-muted mb-3">{member.description}</p>
                  <div className="member-experience">
                    <span className="badge bg-light text-dark">अनुभव: {member.experience}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="departments-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">विभाग प्रमुख</h2>
              <p className="text-muted">
                कारखान्याच्या विविध विभागांचे प्रमुख
              </p>
            </div>
          </div>

          <div className="row g-4">
            {departments.map((department, index) => (
              <div key={department.name || index} className="col-lg-3 col-md-6">
                <div className="department-card h-100 bg-white rounded shadow-sm border p-4">
                  <div className="department-icon text-center mb-3">
                    <i 
                      className={`fas ${department.icon} fa-3x`}
                      style={{ color: '#ed2a30' }}
                    ></i>
                  </div>
                  
                  <h6 className="department-name mb-2">{department.name}</h6>
                  <h6 className="department-head text-primary mb-3">{department.head}</h6>
                  <p className="department-description text-muted small">{department.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Management */}
      <section className="contact-management py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="contact-box bg-primary text-white p-5 rounded">
                <h3 className="mb-3">संचालक मंडळाशी संपर्क</h3>
                <p className="mb-4">
                  तुमच्या सूचना किंवा तक्रारी आम्हाला कळवा
                </p>
                <div className="contact-info">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <i className="fas fa-phone fa-2x mb-3"></i>
                      <h6>फोन</h6>
                      <p>७७९६२८८५८२</p>
                    </div>
                    <div className="col-md-4">
                      <i className="fas fa-envelope fa-2x mb-3"></i>
                      <h6>ईमेल</h6>
                      <p>moteajit10@gmail.com</p>
                    </div>
                    <div className="col-md-4">
                      <i className="fas fa-clock fa-2x mb-3"></i>
                      <h6>कार्यालयीन वेळ</h6>
                      <p>सकाळी ९ ते संध्याकाळी ५</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

Management.displayName = 'Management';

export default Management; 