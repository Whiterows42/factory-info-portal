import React from 'react';
import { footerData } from './Footer';

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <h5 className="mb-3">{footerData.companyInfo.name}</h5>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              {footerData.companyInfo.address}
            </p>
            <p className="mb-2">
              <i className="fas fa-phone me-2"></i>
              {footerData.companyInfo.phone}
            </p>
            <p className="mb-3">
              <i className="fas fa-envelope me-2"></i>
              {footerData.companyInfo.email}
            </p>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <div className="text-center text-md-end">
              <p className="mb-3">{footerData.copyright}</p>
              
              {/* Social Links */}
              { false && 
               /* == 1st.temporary hide social icons using {false &&} --2nd -- comments social link aaray inhomepagedata.js.. *** if you want to use then remove only {false &&} == 
                        and cooments array present in the homepagedata.js */
              <div className="social-links">
                {footerData.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="text-white me-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
}
            </div>
          </div>
        </div>
        
        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button 
            className="btn btn-primary btn-sm rounded-circle"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{ width: '50px', height: '50px' }}
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer; 