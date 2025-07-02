// src/pages/Resume.jsx
import React, { useState } from 'react';
import './Resume.css';

const tabs = [
    { label: 'Education', key: 'education', icon: 'bi-mortarboard' },
    { label: 'Experience', key: 'experience', icon: 'bi-briefcase' },
    { label: 'Skills', key: 'skills', icon: 'bi-tools' },
    { label: 'Certifications', key: 'certifications', icon: 'bi-award' },
];

export default function Resume() {
    const [activeTab, setActiveTab] = useState('education');

    const renderTabContent = (key) => {
        switch (key) {
            case 'education':
                return (
                    <div>
                        <h4>Education</h4>
                        <p>Include your degrees, schools, graduation dates, and achievements here.</p>
                    </div>
                );
            case 'experience':
                return (
                    <div>
                        <h4>Experience</h4>
                        <p>Include your job titles, companies, timelines, and responsibilities here.</p>
                    </div>
                );
            case 'skills':
                return (
                    <div>
                        <h4>Skills</h4>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Firebase, Bootstrap</li>
                            <li>UX/UI Design, SEO, Git</li>
                        </ul>
                    </div>
                );
            case 'certifications':
                return (
                    <div>
                        <h4>Certifications</h4>
                        <p>Add your professional certifications or course completions here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container py-5 resume-page">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-column flex-md-row text-center text-md-start">
                <h2 className="mb-3 mb-md-0">My Resume</h2>
                <a
                    href="/assets/Windie-Victoria-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-theme"
                >
                    Download PDF
                </a>
            </div>

            {/* Desktop Layout */}
            <div className="d-none d-md-flex row">
                <div className="col-md-3 mb-3 mb-md-0">
                    <div className="nav flex-column nav-pills resume-tabs" role="tablist" aria-orientation="vertical">
                        {tabs.map((tab) => (
                            <button
                                key={tab.key}
                                className={`nav-link d-flex align-items-center gap-2 ${activeTab === tab.key ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <i className={`bi ${tab.icon}`}></i>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="tab-content">{renderTabContent(activeTab)}</div>
                </div>
            </div>

            {/* Mobile Accordion Layout */}
            <div className="d-md-none accordion" id="resumeAccordion">
                {tabs.map((tab) => (
                    <div className="accordion-item" key={tab.key}>
                        <h2 className="accordion-header" id={`heading-${tab.key}`}>
                            <button
                                className={`accordion-button ${activeTab !== tab.key ? 'collapsed' : ''}`}
                                type="button"
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <i className={`bi ${tab.icon} me-2`}></i>
                                {tab.label}
                            </button>
                        </h2>
                        <div className={`accordion-collapse collapse ${activeTab === tab.key ? 'show' : ''}`}>
                            <div className="accordion-body">{renderTabContent(tab.key)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
