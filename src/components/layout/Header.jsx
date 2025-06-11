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
      {/* Top Bar */}
      <div style={{backgroundColor: 'red'}} className="top-bar py-2">
        <div className="row">
          <div style={{backgroundColor: 'red',color: 'white'}} className="col-12">
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
      <div className="header-bar bg-white py-3">
        {/* <div className="container"> */}
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-lg-3 col-md-4 col-8">
              <Link to="/" className="navbar-brand" onClick={() => handleNavClick('/')}>
                <img 
                  src={siteData.logoUrl} 
                  alt={siteData.title}
                  className="img-fluid d-none d-md-block"
                  style={{ maxHeight: '80px' }}
                />
                <img 
                  src={siteData.mobileLogoUrl || siteData.logoUrl} 
                  alt={siteData.title}
                  className="img-fluid d-md-none"
                  style={{ maxHeight: '60px' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="col-lg-9 col-md-8 d-none d-md-block">
              <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav ms-auto">
                  {navigationData.map((item) => (
                    <li key={item._id} className="nav-item mx-1">
                      <Link 
                        to={item.path}
                        style={{backgroundColor: location.pathname === item.path ? 'red' : 'white',color: location.pathname === item.path ? 'white' : 'black',textDecoration: 'none !important'}}
                        className={`nav-link px-3 py-2 rounded `}
                        onClick={() => handleNavClick(item.path)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="col-4 d-md-none text-end">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={handleMenuToggle}
                aria-label="Toggle navigation"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
              </button>
            </div>
          </div>
        {/* </div> */}
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