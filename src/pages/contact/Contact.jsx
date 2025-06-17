import React, { useState } from 'react';
import { contactInfo } from './contactData';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('संदेश पाठवला गेला! आम्ही लवकरच आपल्याशी संपर्क साधू.');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg,rgb(20, 151, 226) 0%,rgb(26, 131, 218) 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">संपर्क</h1>
              <p className="lead">
                आमच्याशी संपर्क साधा - आम्ही आपल्या सेवेत आहोत
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="contact-card text-center p-4 bg-white rounded shadow-sm border h-100">
                <div className="contact-icon mb-3">
                  <i className="fas fa-phone fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">फोन</h5>
                <p className="mb-0">
                  <a href={`tel:${contactInfo.phone}`} className="text-decoration-none">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-card text-center p-4 bg-white rounded shadow-sm border h-100">
                <div className="contact-icon mb-3">
                  <i className="fas fa-envelope fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">ईमेल</h5>
                <p className="mb-0">
                  <a href={`mailto:${contactInfo.email}`} className="text-decoration-none">
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="contact-card text-center p-4 bg-white rounded shadow-sm border h-100">
                <div className="contact-icon mb-3">
                  <i className="fas fa-map-marker-alt fa-3x text-primary"></i>
                </div>
                <h5 className="mb-3">पत्ता</h5>
                <p className="mb-0">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="contact-form-section py-5 bg-light">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form bg-white p-4 rounded shadow-sm">
                <h3 className="mb-4">संदेश पाठवा</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">नाव *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">फोन</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">ई-मेल *</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="subject" className="form-label">विषय *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="message" className="form-label">संदेश *</label>
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary px-4 py-2">
                        संदेश पाठवा
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Location & Additional Info */}
            <div className="col-lg-6">
              <div className="location-info bg-white p-4 rounded shadow-sm h-100">
                <h3 className="mb-4">आमचे स्थान</h3>
                
                {/* Map */}
                <div className="map-container mb-4" style={{ height: '300px' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5757799581365!2d73.85575827500873!3d18.45972058263068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR&#39;S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1709925068893!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                <div className="location-details">
                  <h5 className="mb-3">कार्यालयीन वेळ</h5>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <span>सोमवार - शनिवार:</span>
                      <span>सकाळी ९:०० - संध्याकाळी ६:००</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>रविवार:</span>
                      <span>बंद</span>
                    </div>
                  </div>

                  <h5 className="mb-3">अतिरिक्त माहिती</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      निःशुल्क सल्ला उपलब्ध
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      शेतकरी सेवा केंद्र
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-check-circle text-success me-2"></i>
                      तांत्रिक मार्गदर्शन
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Stats */}
      <section className="contact-stats py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-phone fa-2x text-primary mb-3"></i>
                <h4 className="fw-bold">२४/७</h4>
                <p className="text-muted">आपत्कालीन सेवा</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-clock fa-2x text-success mb-3"></i>
                <h4 className="fw-bold">२४ तास</h4>
                <p className="text-muted">प्रतिसाद वेळ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-users fa-2x text-warning mb-3"></i>
                <h4 className="fw-bold">२०,०००+</h4>
                <p className="text-muted">संतुष्ट ग्राहक</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <i className="fas fa-headset fa-2x text-info mb-3"></i>
                <h4 className="fw-bold">१००%</h4>
                <p className="text-muted">ग्राहक समाधान</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 