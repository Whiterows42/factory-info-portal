import React, { useEffect, memo } from 'react';
import { fallbackAuctions } from './Data';

const EAuction = memo(() => {

  // Use API data or fallback to static data
  const auctionsData =  fallbackAuctions;
  const activeAuctionsData =  fallbackAuctions.filter(a => a.status === 'active');


  return (
    <div className="e-auction-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg, #ed2a30 0%, #c41e3a 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">E-Auction</h1>
              <p className="lead">
                ऑनलाइन लिलाव - पारदर्शक आणि न्याय्य व्यवहार
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Auctions */}
      <section className="auctions-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">सध्याचे लिलाव</h2>
              <p className="text-muted">
                आमच्या उत्पादनांच्या ऑनलाइन लिलावात भाग घ्या
              </p>
            </div>
          </div>

          <div className="row g-4">
            {auctionsData.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="auction-card h-100 bg-white rounded shadow-sm border">
                  <div className="card-header bg-light p-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="auction-icon">
                        <i className={`fas ${item.icon} fa-2x text-primary`}></i>
                      </div>
                      <span className={`badge ${
                        item.status === 'लाइव्ह' ? 'bg-success' : 
                        item.status === 'आगामी' ? 'bg-warning' : 'bg-secondary'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="card-body p-3">
                    <h5 className="card-title mb-3">{item.title}</h5>
                    <div className="auction-details">
                      <div className="detail-item d-flex justify-content-between mb-2">
                        <span className="text-muted">प्रमाण:</span>
                        <span className="fw-bold">{item.quantity}</span>
                      </div>
                      <div className="detail-item d-flex justify-content-between mb-2">
                        <span className="text-muted">प्रारंभिक किंमत:</span>
                        <span className="fw-bold text-success">{item.startPrice}</span>
                      </div>
                      <div className="detail-item d-flex justify-content-between mb-3">
                        <span className="text-muted">शेवटची तारीख:</span>
                        <span className="fw-bold text-danger">{item.endDate}</span>
                      </div>
                    </div>
                    
                    <div className="auction-actions text-center">
                      <button 
                        className={`btn px-4 py-2 ${
                          item.status === 'लाइव्ह' ? 'btn-success' : 
                          item.status === 'आगामी' ? 'btn-warning' : 'btn-secondary'
                        }`}
                        disabled={item.status === 'पूर्ण'}
                      >
                        {item.status === 'लाइव्ह' ? 'बिड करा' : 
                         item.status === 'आगामी' ? 'नोंदणी करा' : 'पूर्ण झाले'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="process-section py-5 bg-light">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">E-Auction कसे काम करते</h2>
              <p className="text-muted">
                सोप्या चार चरणांमध्ये ऑनलाइन लिलावात भाग घ्या
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">१</span>
                </div>
                <h5 className="mb-3">नोंदणी करा</h5>
                <p className="text-muted">आमच्या E-Auction प्लॅटफॉर्मवर नोंदणी करा</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">२</span>
                </div>
                <h5 className="mb-3">उत्पादन निवडा</h5>
                <p className="text-muted">आपल्याला आवश्यक असलेले उत्पादन निवडा</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">३</span>
                </div>
                <h5 className="mb-3">बिड करा</h5>
                <p className="text-muted">स्पर्धात्मक किंमतीत बिड करा</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                     style={{ width: '60px', height: '60px' }}>
                  <span className="fw-bold">४</span>
                </div>
                <h5 className="mb-3">पेमेंट करा</h5>
                <p className="text-muted">सुरक्षित पेमेंट गेटवे द्वारे पेमेंट करा</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-3">E-Auction चे फायदे</h2>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="benefit-card text-center p-4">
                <i className="fas fa-shield-alt fa-3x text-success mb-3"></i>
                <h5 className="mb-3">पारदर्शकता</h5>
                <p className="text-muted">संपूर्ण प्रक्रिया पारदर्शक आणि न्याय्य</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="benefit-card text-center p-4">
                <i className="fas fa-clock fa-3x text-primary mb-3"></i>
                <h5 className="mb-3">वेळेची बचत</h5>
                <p className="text-muted">घरबसल्या ऑनलाइन लिलावात सहभाग</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="benefit-card text-center p-4">
                <i className="fas fa-chart-line fa-3x text-warning mb-3"></i>
                <h5 className="mb-3">स्पर्धात्मक किंमत</h5>
                <p className="text-muted">बाजाराच्या तुलनेत चांगली किंमत</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default EAuction; 