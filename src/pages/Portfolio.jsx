// src/pages/Portfolio.jsx
import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Portfolio.css';
import portfolioData from '../data/portfolio.json';

export default function Portfolio() {
  const categories = Object.keys(portfolioData);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const loaderRef = useRef(null);

  const activeItems = portfolioData[activeTab].slice(0, visibleCount);
  const selectedItem = selectedIndex !== null ? portfolioData[activeTab][selectedIndex] : null;

  // Lazy loading with IntersectionObserver
  const handleObserver = useCallback((entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setVisibleCount((prev) => prev + 3);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, { threshold: 1.0 });
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [handleObserver]);

  // Reset scroll state on tab switch
  useEffect(() => {
    setVisibleCount(6);
    setSelectedIndex(null);
  }, [activeTab]);

  // Keyboard modal navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const total = portfolioData[activeTab].length;
      if (selectedIndex !== null) {
        if (e.key === 'ArrowRight') {
          setSelectedIndex((prev) => (prev + 1) % total);
        } else if (e.key === 'ArrowLeft') {
          setSelectedIndex((prev) => (prev - 1 + total) % total);
        } else if (e.key === 'Escape') {
          setSelectedIndex(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, activeTab]);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">My Portfolio</h2>

      {/* Tabs */}
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`btn ${activeTab === category ? 'btn-dark' : 'btn-outline-secondary'}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="masonry-gallery">
        {activeItems.map((item, i) => (
          <div key={i} className="masonry-item" onClick={() => setSelectedIndex(i)}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>


      <div ref={loaderRef} className="text-center py-4 text-muted">Loading more...</div>

      {/* Thumbnail Bar 
      <div className="thumbnail-bar mt-4">
        {portfolioData[activeTab].map((item, i) => (
          <img
            key={i}
            src={item.image}
            alt={item.title}
            className={selectedIndex === i ? 'active' : ''}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>
      */}

      {/* Modal */}
      {selectedItem && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          onClick={() => setSelectedIndex(null)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header">
                <h5 className="modal-title">{selectedItem.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedIndex(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="img-fluid rounded mb-3"
                />
                <p>{selectedItem.description}</p>
              </div>
              <div className="modal-footer justify-content-between">
                <button
                  className="btn btn-outline-light"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex - 1 + portfolioData[activeTab].length) % portfolioData[activeTab].length);
                  }}
                >
                  ← Previous
                </button>
                <button
                  className="btn btn-outline-light"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((selectedIndex + 1) % portfolioData[activeTab].length);
                  }}
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
