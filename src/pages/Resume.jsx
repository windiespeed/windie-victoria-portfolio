// src/pages/Resume.jsx
import React, { useState } from 'react';
import './Resume.css';

const tabs = [
    { label: 'Education & Certifications', key: 'education', icon: 'bi-mortarboard' },
    { label: 'Experience', key: 'experience', icon: 'bi-briefcase' },
    { label: 'Skills & Software', key: 'skills', icon: 'bi-tools' },
    { label: 'Achievements', key: 'achievements', icon: 'bi-award' },
    { label: 'Volunteer', key: 'volunteer', icon: 'bi-clipboard' },
];

export default function Resume() {
    const [activeTab, setActiveTab] = useState('education');

    const renderTabContent = (key) => {
        switch (key) {
            case 'education':
                return (
                   <> 
                    <div>
                        <h4>Education</h4>
                        <br></br>
                        <p>2009<br></br>
                        <strong>Office Systems Technology</strong><br></br>
                        East Central Community College
                        </p>
                    </div>
                    <div>
                        <p>2020<br></br>
                        <strong>Interdisciplinary Studies - Business/Business Technology</strong><br></br>
                        Mississippi State University
                        </p>
                    </div>
                        <br></br>
                    <div>
                        <h4>Certifications</h4>
                        <br></br>
                        <p>2024<br></br>
                            <strong>Junior Full-Stack Developer</strong><br></br>
                            Mississippi Coding Academies
                        </p>
                    </div>
                    </>
                );
            case 'experience':
                return (
                    <>
                    <div>
                        <h4>Experience</h4>
                        <br></br>
                            <p><strong>Junior Instructor - Distance Learning</strong><br></br>
                                Mississippi Coding Academies<br></br>
                                2024 - Present<br></br>
                            </p>
                        <ul>
                            <li>Teach fundamental programming concepts (e.g., variables, loops, functions) in HTML, CSS, and JavaScript to beginners.</li>
                            <li>Assist students in debugging code and understanding algorithmic problem-solving.</li>
                            <li>Develop lesson plans, coding exercises, and hands-on projects to enhance student engagement.</li>
                            <li>Provide one-on-one support and feedback to help students improve coding skills.</li>
                            <li>Collaborate with senior instructors to refine curriculum and adapt teaching strategies.</li>
                        </ul>
                        <br></br>
                    </div>
                    <div>
                            <p><strong>Digital Operations Specialist</strong><br></br>
                                WCBI-TV/ChartLocal | Columbus, MS<br></br>
                                2022-2023<br></br>
                            </p>
                        <ul>
                            <li>Managed 100+ current campaigns for all digital sales.</li>
                            <li>Monitored analytics and KPIs to track campaign success, presenting insights to stakeholders and driving data-informed decisions.</li>
                            <li>Collaborated with vendors and internal teams to ensure seamless execution of digital operations and troubleshoot technical issues.</li>
                            <li>Collaborated with the client to design targeted email strategies, increasing engagement and conversion rates, while growing the client’s marketing list by over 4,000 contacts.</li>
                            <li>Developed and executed instream marketing, retargeting, geofencing, and lead generation campaigns,  enabling business expansion throughout the state of Mississippi.</li>
                        </ul>
                        <br></br>
                    </div>
                    <div>
                        <p><strong>Marketing and Event Coordinator</strong><br></br>
                            Graham Roofing, Inc. | West Point, MS<br></br>
                            2021 - 2022<br></br>
                        </p>
                        <ul>
                            <li>Managed multiple social media accounts for two organizations.</li>
                            <li>Coordinated and executed events for the company and affiliated organizations, ensuring seamless operations.</li>
                            <li>Created and analyzed detailed reports to evaluate marketing and event performance, providing actionable insights for continuous improvement.</li>
                            <li>Designed, produced, and maintained all marketing materials and promotional products, ensuring alignment with branding guidelines and campaign objectives.</li>
                            <li>Oversaw the company’s 24-line mobile phone account, managing upgrades, troubleshooting, and monthly billing to ensure smooth communication operations.</li>
                        </ul>
                        <br></br>
                    </div>
                        <div>
                            <p><strong>Administrative Assistant, Building Construction Science Dept.</strong><br></br>
                                Mississippi State University | Starkville, MS<br></br>
                                2015 - 2020<br></br>
                            </p>
                            <ul>
                                <li>Provided administrative support to students, faculty and staff.</li>
                                <li>Managed daily tasks, such as payroll, departmental budget ($500,000+), supplies and inventory.</li>
                                <li>Created and maintained detailed monthly and other reports as necessary.</li>
                                <li>Oversaw faculty and student hiring processes.</li>
                                <li>Coordinated departmental events, meetings, awards, and travel.</li>
                            </ul>
                            <br></br>
                        </div>
                    </>
                );
            case 'skills':
                return (
                    <div>
                        <h4>Skill & Software Highlights</h4>
                        <ul>
                            <li>HTML, CSS, JavaScript</li>
                            <li>React, Firebase, Bootstrap</li>
                            <li>UX/UI Design, SEO, Git</li>
                            <li>Wordpress, Google Workspace, Elementor</li>
                            <li>Figma, Adobe Creative Suite, Canva</li>
                            <li>VS Code, Visual Studio, Microsoft 365</li>
                        </ul>
                        <p>I am also a highly organized, motivated, fast learner. I have excellent problem-solving skills, as well as communication skills. These skills, along with my ability to management multiple projects, along with strict deadlines make me your prime candidate.</p>
                    </div>
                );
            case 'achievements':
                return (
                    <div>
                        <h4>Achievements</h4>
                        <ul>
                            <li>First Place in Mississippi State University’s Maroon & Write Essay Contest
                                Essay Link - https://scholarsjunction.msstate.edu/maroonedition/5/</li>
                            <li>Mississippi Business Education Association (MBEA) Student Award, ECCC</li>
                            <li>Dean’s List, ECCC</li>
                            <li>Phi Beta Lambda, ECCC</li>
                                <ul>
                                <li>First place at State Community Service Competition</li>
                                <li>Fourth place at National Community Service Competition</li>
                                </ul>
                            <li>Who’s Who Among American Junior Colleges, ECCC</li>
                        </ul>
                        <br></br>
                    </div>
                );
            case 'volunteer':
                return (
                    <div>
                        <h4>Volunteer & Other Experience</h4>
                        <ul>
                            <li>Expert technology skills</li>
                                <ul>
                                    <li>Create interactive UI/UX prototypes and provide clients with design mockups for improved project visualization.</li>
                                    <li>Maintain and update business websites with current content using languages such as HTML, CSS, and JavaScript and programs such as Wordpress with plugins like Elementor, optimizing for usability and brand alignment.</li>
                                </ul>
                            <li>Volunteered as den leader for the Weblos (4th and 5th grade), Boy Scouts of America (Cub Scouts)</li>
                                <ul>
                                    <li>Taught lessons once a week</li>
                                    <li>Participated in recruitment group camps, hikes, derby car races, Christmas parades, and other activities/events</li>
                                    <li>Tracked each scout’s progress and awards</li>
                                </ul>
                        </ul>
                    <br></br>
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
                    href="/assets/2025_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-theme"
                >
                    Download Complete Resume
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
