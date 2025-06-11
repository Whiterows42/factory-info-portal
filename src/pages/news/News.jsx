import React, { useEffect, memo, useState } from 'react';

import { fallbackNews, fallbackCategories, featuredNewsData } from './Data';

const News = memo(() => {
 
  const [activeCategory, setActiveCategory] = useState('all');
 
  // Use API data or fallback to static data
  const newsArticles =  fallbackNews;
  const categories =  fallbackCategories;
  const featuredArticle = featuredNewsData[0];

  const regularNews = newsArticles.filter(news => !news.featured);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
   
  };

  return (
    <div className="news-page">
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ 
        background: 'linear-gradient(135deg, #ed2a30 0%, #c41e3a 100%)',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="display-4 fw-bold mb-3">बातम्या</h1>
              <p className="lead">
                कारखान्याच्या नवीनतम बातम्या आणि घडामोडी
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredArticle && (
        <section className="featured-news py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="featured-article bg-white rounded shadow-lg overflow-hidden">
                  <div className="row g-0">
                    <div className="col-lg-6">
                      <img 
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="img-fluid h-100"
                        style={{ objectFit: 'cover', minHeight: '300px' }}
                      />
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="d-flex align-items-center mb-3">
                          <span className="badge bg-primary me-2">{featuredArticle.category}</span>
                          <span className="text-muted">{featuredArticle.date}</span>
                        </div>
                        <h2 className="mb-3">{featuredArticle.title}</h2>
                        <p className="lead text-muted mb-4">{featuredArticle.summary}</p>
                        <button className="btn btn-primary">
                          संपूर्ण बातमी वाचा
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* News Categories & Articles */}
      <section className="news-section py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Categories Sidebar */}
            <div className="col-lg-3 mb-4">
              <div className="categories-sidebar bg-white p-4 rounded shadow-sm">
                <h5 className="mb-4">बातम्यांचे प्रकार</h5>
                <ul className="list-unstyled">
                  {categories.map((category, index) => (
                    <li key={category.id || index} className="mb-2">
                      <button
                        onClick={() => handleCategoryClick(category.id || 'all')}
                        className={`d-flex justify-content-between align-items-center text-decoration-none p-2 rounded border-0 w-100 ${
                          activeCategory === (category.id || 'all') ? 'bg-primary text-white' : 'text-dark bg-light'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className={`badge ${activeCategory === (category.id || 'all') ? 'bg-light text-dark' : 'bg-primary text-white'}`}>
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest News Widget */}
              <div className="latest-news bg-white p-4 rounded shadow-sm mt-4">
                <h6 className="mb-3">अलीकडील बातम्या</h6>
                {newsArticles.slice(0, 3).map((article, index) => (
                  <div key={article.id || index} className={`latest-item ${index < 2 ? 'border-bottom pb-2 mb-2' : ''}`}>
                    <small className="text-muted">{article.date}</small>
                    <p className="small mb-0">{article.title.substring(0, 40)}...</p>
                  </div>
                ))}
              </div>
            </div>

            {/* News Articles */}
            <div className="col-lg-9">
              <div className="news-grid">
                <div className="row g-4">
                  {regularNews.map((article, index) => (
                    <div key={article.id || index} className="col-lg-6">
                      <div className="news-card h-100 bg-white rounded shadow-sm overflow-hidden">
                        <img 
                          src={article.image}
                          alt={article.title}
                          className="card-img-top"
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center mb-3">
                            <span className="badge bg-secondary me-2">{article.category}</span>
                            <small className="text-muted">{article.date}</small>
                          </div>
                          <h5 className="card-title mb-3">{article.title}</h5>
                          <p className="card-text text-muted mb-3">{article.summary}</p>
                          <button className="btn btn-outline-primary btn-sm">
                            अधिक वाचा
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="d-flex justify-content-center mt-5">
                <nav aria-label="News pagination">
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <span className="page-link">मागील</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">१</span>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">२</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">३</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">पुढील</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

News.displayName = 'News';

export default News; 