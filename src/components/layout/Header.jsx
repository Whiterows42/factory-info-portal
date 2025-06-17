import React, { useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobileMenu, setActiveNavItem } from '../../store/slices/uiSlice';
import { contactInfo, siteData, navigationData } from './HeaderData';
const Header = memo(() => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isMobileMenuOpen } = useSelector((state) => state.ui);


  const handleMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleNavClick = (path) => {
    dispatch(setActiveNavItem(path));
    if (isMobileMenuOpen) {
      dispatch(toggleMobileMenu());
    }
  };

  // Show loading state

  return (
    <header className="masthead shadow-sm">


  {/* ... rest of your header code ... */}


      {/* Top Bar */}
      <div style={{background: 'linear-gradient(135deg, rgb(20, 151, 226) 0%, rgb(26, 131, 218) 100%)'}} className="top-bar py-2 d-none d-md-block">
        <div className="row mr-0 ml-0">
          <div style={{background: 'linear-gradient(135deg, rgb(20, 151, 226) 0%, rgb(26, 131, 218) 100%)', color: 'white'}} className="col-12">
            <div className="d-flex justify-content-start align-items-center px-3 py-1">
              <span className="me-4 d-none d-md-inline">
                <i className="fas fa-phone me-2"></i>
                {contactInfo.phone}
              </span>
              <span className="d-none d-md-inline">
                <i className="fas fa-envelope me-2"></i>
                {contactInfo.email}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}

          

      {/* /* py- means height py-5 increase height of the header */ }
        
      <div className="header-bar bg-white py-2 md-py-4">
  <div className="container position-relative d-flex justify-content-between align-items-center flex-wrap">
    
    {/* ✅ LEFT: Logo + Name + Vitthal Image */}
    <div className="d-flex align-items-center">
      <Link to="/" className="navbar-brand d-flex align-items-center" onClick={() => handleNavClick('/')}>
        {/* Left Logo */}
        <img 
          src={siteData.logoUrl} 
          alt={siteData.title}
          className="img-fluid"
          style={{ maxHeight: '50px', width: 'auto' }}
        />

        {/* Marathi Title */}
        <div className="d-flex flex-column justify-content-center mx-2 text-center">
          <h6 className="mb-0 fw-bold text-dark" style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
            श्री विठ्ठल सहकारी साखर कारखाना लि.
          </h6>
          <small className="text-muted" style={{ fontSize: 'clamp(0.7rem, 1.5vw, 0.875rem)' }}>
            वेणुनगर / गुरसाळे
          </small>
        </div>

        {/* Vitthal Image */}
        <img 
          src="/vitthal.jpg"
          alt="Vitthal"
          className="img-fluid"
          style={{ maxHeight: '50px', width: 'auto' }}
        />
      </Link>
    </div>

    {/* ✅ RIGHT: Navigation Links */}
    <nav className="d-none d-md-block">
      <ul className="navbar-nav d-flex flex-row align-items-center">
        {navigationData.map((item) => (
          <li key={item._id} className="nav-item mx-1">
            <Link 
              to={item.path}
              className="nav-link px-3 py-2 rounded-5"
              style={{
                background: location.pathname === item.path ? '#e06805' : 'white',
                color: location.pathname === item.path ? 'white' : 'black',
                textDecoration: 'none'
              }}
              onClick={() => handleNavClick(item.path)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    {/* Hamburger Menu Button */}
    <button
      className="d-md-none btn border-0"
      onClick={handleMenuToggle}
      style={{
        fontSize: '24px',
        padding: '8px',
        color: '#333'
      }}
    >
      <i className={`fas fa-${isMobileMenuOpen ? 'times' : 'bars'}`}></i>
    </button>

  </div>
</div>



      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-menu bg-white border-top d-md-none">
          <div className="container">
            <nav className="navbar-nav py-3">
              {navigationData.map((item) => (
                <Link
                  key={item._id}
                  to={item.path}
                  className={`nav-link py-2 border-bottom ${
                    location.pathname === item.path 
                      ? 'active text-primary fw-bold' 
                      : 'text-dark'
                  }`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.title}
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="mt-3 pt-3 border-top">
                <div className="text-muted small">
                  <div className="mb-2">
                    <i className="fas fa-phone me-2"></i>
                    {contactInfo.phone}
                  </div>
                  <div>
                    <i className="fas fa-envelope me-2"></i>
                    {contactInfo.email}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
});

Header.displayName = 'Header';

export default Header; 