// src/pages/Home.jsx
import React from 'react';
import './Home.css'; 

export default function Home() {
  return (
    <div className="hero-section d-flex justify-content-end align-items-center">
      <div className="hero-text text-end pe-5">
        <h1 className="display-4">Designing your story</h1>
        <p className="lead">One element at a time</p>

        {/* optional call to action button
        <br></br>
        <br></br>
        <br></br>

        <div class="text-center">
          <a href="/portfolio" class="btn btn-theme btn-lg">
            <i class="bi bi-layers me-2"></i>View Portfolio
          </a>
        </div>
        */}

      </div>
    </div>
  );
}
